import Pen from './Pen';

const reset = (chain, pens) => {
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

const grabChain = (canvas, chain, e) => {
  e.preventDefault();
  e.stopPropagation();
  const rect = canvas.getBoundingClientRect();
  const x = parseInt(e.clientX - rect.left, 10);
  const y = parseInt(e.clientY - rect.top, 10) - parseInt(canvas.height, 10) / 4;
  if (x * x - chain.links[0].x * chain.links[0].x
     + y * y - chain.links[0].y * chain.links[0].y
    < (chain.links[0].linkSize * chain.links[0].linkSize) * 16) {
    chain.isDragging = true;
  } else {
    chain.isDragging = false;
  }
};

const shakeChain = (canvas, chain, e) => {
  e.preventDefault();
  e.stopPropagation();
  const rect = canvas.getBoundingClientRect();
  const y = parseInt(e.clientY - rect.top, 10) - parseInt(canvas.height, 10) / 4;
  if (chain.isDragging) {
    chain.links[0].y = 2 * y;
  }
};

const releaseChain = (chain, e) => {
  e.preventDefault();
  e.stopPropagation();
  chain.isDragging = false;
};

const levelSet = (level, pens, ctx, canvas, scale) => {
  let color = 'rgb(0,0,0)';
  switch (level) {
    case '1':
      pens.length = 0;
      for (let i = 0; i < 4; i += 1) {
        if (i === 3) {
          color = 'rgb(250,130,0)';
        } else {
          color = 'rgb(200,0,200)';
        }
        pens.push(
          new Pen({

            ctx,
            x: (i + 3.75)
             * (parseInt(canvas.width, 10) / 7),
            y: -canvas.height / 4,
            c: color
          })
        );
      }

      return pens;
      /*
    case '2':
      pens.length = 0;
      for (let i = 0; i < 3; i += 1) {
        pens.push(new Pen(ctx, 0, 250, q5.color(0)));
      }

      pens[0].x = q5.width - 100;
      pens[0].y = (3.5 * q5.height) / 5;
      pens[0].color = q5.color(100, 0, 200);
      pens[1].x = q5.width - 30;
      pens[1].y = (1.5 * q5.height) / 5;
      pens[1].color = q5.color(250, 100, 0);
      pens[2].x = q5.width - 100;
      pens[2].y = (1.5 * q5.height) / 5;
      pens[2].color = ctx.color(100, 0, 200);

      return pens;
    case '3':
      pens.length = 0;
      for (let i = 0; i < 5; i += 1) {
        pens.push(new Pen(q5, 0, 250, ctx.color(0)));
      }

      pens[0].x = width / 2;
      pens[0].y = (3.5 * ctx.height) / 5;
      pens[0].color = ctx.color(100, 0, 200);
      pens[1].x = width / 2 - 120;
      pens[1].y = (3.5 * ctx.height) / 5;
      pens[1].color = ctx.color(250, 100, 0);
      pens[2].x = width / 2 + 120;
      pens[2].y = (3.5 * ctx.height) / 5;
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
      */
    default:
      return pens;
  }
};

export {
  reset, grabChain, shakeChain, releaseChain, levelSet
};
