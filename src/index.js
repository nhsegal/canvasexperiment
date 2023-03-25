import './style.css';
import buildCanvas from './buildHTML';
import drawBackground from './drawBackground';
import Chain from './Chain';
import {
  grabChain,
  shakeChain,
  releaseChain,
  reset,
  levelSet
} from './ELcallbackFunctions';
import checkForWin from './checkForWin';

const width = 8 * 120;
const height = 300;
const scale = window.devicePixelRatio;
buildCanvas(width, height);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const chain = new Chain({
  ctx,
  length: scale * width - 24,
  dx: 8,
  dt: 8,
  scale
});

const pens = [];
let level = null;
let end = 'fixed';
let ready = false;

canvas.addEventListener('mousedown', (e)=>{
  grabChain(canvas, chain, e);
  ready = true;
});

canvas.addEventListener('mousemove', (e) => {
  shakeChain(canvas, chain, e);
});

canvas.addEventListener('mouseup', (e) => {
  releaseChain(chain, e);
});

canvas.addEventListener('mouseout', (e) => {
  releaseChain(chain, e);
});

document.querySelector('#resetButton').addEventListener('click', ()=>reset(chain, pens));
document.querySelectorAll('select[name="level"]').forEach((option) => {
  option.addEventListener('change', (e) => {
    level = e.target.value;
    levelSet(level, pens, ctx, canvas);
    ready = reset(chain, pens);
  });
});

document.querySelectorAll('input[name="right_end"]').forEach((option) => {
  option.addEventListener('change', (event) => {
    end = event.target.value;
  });
});

document.querySelector('.close').addEventListener('click', ()=>{
  document.querySelector('.modal').style.display = 'none';
  reset(chain, pens);
});

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground(canvas, width, height, scale);
  ctx.setTransform(1, 0, 0, 1, 0, canvas.height / 2);
  chain.move(end);
  chain.display(end);
  if (pens.length) {
    pens.forEach((pen) => {
      pen.hitCheck(chain);
      pen.display();
    });
    checkForWin(pens, ready);
  }
  window.requestAnimationFrame(draw);
};

draw();
