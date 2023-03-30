import './style.css';
import buildCanvas from './buildHTML';
import drawBackground from './drawBackground';
import Chain from './Chain';
import {
  grabChain,
  shakeChain,
  releaseChain,
  reset,
  levelSet,
  setSpeed
} from './ELcallbackFunctions';
import checkForWin from './checkForWin';
import Link from './Link';

const res = 4;

const width = 8 * 120;
const height = 300;
const scale = window.devicePixelRatio;
buildCanvas(width, height);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const chain = new Chain({
  ctx,
  length: scale * width - 3 * 8,
  dx: 8,
  dt: 8,
  scale,
  res
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

document.querySelectorAll('input[name="speed"]').forEach((option) => {
  option.addEventListener('change', (event) => {
    chain.res = setSpeed(event.target.value);
    chain.length = (scale * width - 3 * 8) * chain.res;
    chain.links.length = 0;
    chain.links.push(new Link({
      ctx: chain.ctx,
      x: chain.linkSize,
      linkSize: 2 * chain.linkSize
    }));

    for (let i = 1; i < chain.length / chain.linkSize; i += 1) {
      chain.links.push(new Link(
        {
          ctx: chain.ctx,
          x: (i * chain.linkSize) / chain.res + (2 * chain.linkSize),
          linkSize: chain.linkSize
        }
      ));
    }
  });
});

document.querySelector('.close').addEventListener('click', ()=>{
  level = document.querySelector('select[name="level"]').selectedIndex;
  ready = false;
  reset(chain, pens);
  document.querySelector('.modal').style.display = 'none';
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
  }
  checkForWin(pens, ready);
  window.requestAnimationFrame(draw);
};

draw();
