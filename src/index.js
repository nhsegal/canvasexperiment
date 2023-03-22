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
let mySound;

canvas.addEventListener('mousedown', (e)=>{
  grabChain(canvas, chain, e);
});

canvas.addEventListener('mousemove', (e) => {
  shakeChain(canvas, chain, e);
});

canvas.addEventListener('mouseup', (e) => {
  releaseChain(chain, e);
});

document.querySelector('#resetButton').addEventListener('click', ()=>reset(chain, pens));
document.querySelectorAll('select[name="level"]').forEach((option) => {
  option.addEventListener('change', (e) => {
    level = e.target.value;
    levelSet(level, pens, ctx, canvas, scale);
    reset(chain, pens);
  });
});

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground(canvas, width, height, scale);
  ctx.setTransform(1, 0, 0, 1, 0, canvas.height / 2);
  chain.move('fixed', true);
  chain.display();
  if (pens.length) {
    pens.forEach((pen) => {
      if (pen.hitCheck(chain)) {
        mySound.play();
      }
      pen.display();
    });
  }
  window.requestAnimationFrame(draw);
};

draw();
/*

q5.setup = () => {

  // Event Listeners
  document.querySelectorAll('input[name="right_end"]').forEach((option) => {
    option.addEventListener('change', (event) => {
      end = event.target.value;
    });
  });

};
q5.noLoop();
q5.draw = () => {
  q5.background(220);
  q5.fill(0);
  q5.stroke(0);
  q5.strokeWeight(1);
  q5.line(0, Math.floor(q5.height / 2) + 0.5, q5.width, Math.floor(q5.height / 2) + 0.5);
  q5.line(0, Math.floor(q5.height / 3) + 0.5, q5.width, Math.floor(q5.height / 3) + 0.5);
  q5.line(
    0,
    Math.floor((2 * q5.height) / 3) + 0.5,
    q5.width,
    Math.floor((2 * q5.height) / 3) + 0.5
  );
  q5.line(0, Math.floor(q5.height / 6) + 0.5, q5.width, Math.floor(q5.height / 6) + 0.5);
  q5.line(
    0,
    Math.floor((5 * q5.height) / 6) + 0.5,
    q5.width,
    Math.floor((5 * q5.height) / 6) + 0.5
  );

  if (dragging) {
    chain.links[0].fy = q5.mouseY - q5.height / 2;
  }
  chain.links[0].py = chain.links[0].y;
  chain.links[0].y = chain.links[0].fy;
  chain.move(end, dragging);

  q5.noStroke();

  if (pens.length) {
    pens.forEach((pen) => {
      if (pen.hitCheck(chain)) {
        mySound.play();
      }
      pen.display();
    });
  }
  chain.display(end, dragging);
};

q5.mousePressed = () => {
  if (
    q5.dist(
      chain.links[0].x,
      chain.links[0].y + q5.height / 2,
      q5.mouseX,
      q5.mouseY
    )
    < (3 * chain.linkSize) / 2
  ) {
    dragging = true;
  }
};
q5.mouseReleased = () => {
  dragging = false;
};
*/
