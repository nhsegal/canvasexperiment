import buildCanvas from './buildHTML';
import drawBackground from './drawBackground';

import Chain from './Chain';

const width = 900;
const height = 300;
const scale = window.devicePixelRatio;
buildCanvas(width, height);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const testChain = new Chain(ctx, width * scale, 8, 4);

drawBackground(canvas, width, height, scale);

ctx.setTransform(1, 0, 0, 1, 0, canvas.height / 2);
testChain.display();

/*

import Pen from './Pen';
import Q5 from 'q5xjs';
let q5 = new Q5();

// Chain constructor(q5, length, dx, r)
const width = 900;
const dt = 5;
const dx = 5;
const chain = new Chain(q5, width, dx, dt);
let dragging = false;
let end = 'fixed';
let level = 0;
let mySound;
const pens = [];

const levelSet = () => {
  switch (level) {
    case '1':
      pens.length = 0;
      for (let i = 0; i < 2; i += 1) {
        pens.push(
          new Pen(q5, 0, 250, q5.color(100 + 250 * i, 100 * i, 200 - 200 * i))
        );
      }

      pens[0].x = q5.width - 20;
      pens[0].y = 40;
      pens[1].x = q5.width / 2;
      pens[1].y = q5.height / 4;
      return pens;

    case '2':
      pens.length = 0;
      for (let i = 0; i < 3; i += 1) {
        pens.push(new Pen(q5, 0, 250, q5.color(0)));
      }

      pens[0].x = q5.width - 100;
      pens[0].y = (3.5 * q5.height) / 5;
      pens[0].color = q5.color(100, 0, 200);
      pens[1].x = q5.width - 30;
      pens[1].y = (1.5 * q5.height) / 5;
      pens[1].color = q5.color(250, 100, 0);
      pens[2].x = q5.width - 100;
      pens[2].y = (1.5 * q5.height) / 5;
      pens[2].color = q5.color(100, 0, 200);

      return pens;
    case '3':
      pens.length = 0;
      for (let i = 0; i < 5; i += 1) {
        pens.push(new Pen(q5, 0, 250, q5.color(0)));
      }

      pens[0].x = q5.width / 2;
      pens[0].y = (3.5 * q5.height) / 5;
      pens[0].color = q5.color(100, 0, 200);
      pens[1].x = q5.width / 2 - 120;
      pens[1].y = (3.5 * q5.height) / 5;
      pens[1].color = q5.color(250, 100, 0);
      pens[2].x = q5.width / 2 + 120;
      pens[2].y = (3.5 * q5.height) / 5;
      pens[2].color = q5.color(250, 100, 0);
      pens[3].x = q5.width - 10;
      pens[3].y = (3 * q5.height) / 5;
      pens[3].color = q5.color(250, 100, 0);
      pens[4].x = q5.width - 10;
      pens[4].y = (2 * q5.height) / 5;
      pens[4].color = q5.color(250, 100, 0);

      return pens;
    case '4':
      pens.length = 0;
      for (let i = 0; i < 6; i += 1) {
        pens.push(new Pen(q5, 0, 250, q5.color(0)));
      }

      pens[0].x = q5.width / 2 + 80;
      pens[0].y = (3.5 * q5.height) / 5;
      pens[0].color = q5.color(100, 0, 200);
      pens[1].x = q5.width / 2;
      pens[1].y = (3.5 * q5.height) / 5;
      pens[1].color = q5.color(250, 100, 0);
      pens[2].x = q5.width / 2;
      pens[2].y = (1.5 * q5.height) / 5;
      pens[2].color = q5.color(250, 100, 0);
      pens[3].x = q5.width / 2 - 80;
      pens[3].y = (1.5 * q5.height) / 5;
      pens[3].color = q5.color(100, 0, 200);
      pens[4].x = q5.width / 2 - 80;
      pens[4].y = (3.5 * q5.height) / 5;
      pens[4].color = q5.color(100, 0, 200);
      pens[5].x = q5.width / 2 + 80;
      pens[5].y = (1.5 * q5.height) / 5;
      pens[5].color = q5.color(100, 0, 200);
      return pens;
    case '5':
      pens.length = 0;
      for (let i = 0; i < 6; i += 1) {
        pens.push(new Pen(q5, 0, 250, q5.color(0)));
      }
      pens[0].x = 3 * (q5.width / 4);
      pens[0].y = (1 * q5.height) / 5;
      pens[0].color = q5.color(100, 0, 200);

      pens[1].x = 1 * (q5.width / 4);
      pens[1].y = (4 * q5.height) / 5;
      pens[1].color = q5.color(100, 0, 200);

      pens[2].x = 1 * (q5.width / 4);
      pens[2].y = (1 * q5.height) / 5;
      pens[2].color = q5.color(100, 0, 200);

      pens[3].x = 3 * (q5.width / 4);
      pens[3].y = (4 * q5.height) / 5;
      pens[3].color = q5.color(100, 0, 200);

      pens[4].x = 6;
      pens[4].y = (2 * q5.height) / 6;
      pens[4].color = q5.color(250, 100, 0);

      pens[5].x = 6;
      pens[5].y = (4 * q5.height) / 6;
      pens[5].color = q5.color(250, 100, 0);

      return pens;
    default:
      return pens;
  }
};

const reset = () => {
  chain.links.forEach((val, i, arr) => {
    arr[i].y = 0;
    arr[i].py = 0;
    arr[i].fy = 0;
  });
  if (pens.length) {
    pens.forEach((pen)=>{
      pen.hit = false;
    });
  }
};

q5.setup = () => {
  q5.createCanvas(width, 300);
  q5.textAlign(q5.CENTER);

  // Event Listeners
  document.querySelectorAll('input[name="right_end"]').forEach((option) => {
    option.addEventListener('change', (event) => {
      end = event.target.value;
    });
  });

  document.querySelector('#resetButton').addEventListener('click', reset);

  document.querySelectorAll('select[name="level"]').forEach((option) => {
    option.addEventListener('change', (e) => {
      level = e.target.value;
      levelSet();
      reset();
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
