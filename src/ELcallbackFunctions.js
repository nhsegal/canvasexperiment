import Pen from './Pen';

const reset = (chain, pens) => {
  chain.links.forEach((val, i, arr) => {
    arr[i].y = 0;
    arr[i].py = 0;
    arr[i].fy = 0;
  });
  chain.isDragging = false;
  if (pens.length) {
    pens.forEach((pen, index, arr)=>{
      arr[index].hit = false;
    });
  }
  return false;
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

const levelSet = (level, pens, ctx, canvas) => {
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
            x: (i + 3.8)
             * (parseInt(canvas.width, 10) / 7),
            y: -canvas.height / 4,
            c: color
          })
        );
      }
      return pens;
    case '2':
      pens.length = 0;
      for (let i = 0; i < 4; i += 1) {
        if (i !== 3) {
          color = 'rgb(250,130,0)';
        } else {
          color = 'rgb(200,0,200)';
        }
        pens.push(
          new Pen({
            ctx,
            x: (i + 3.8)
             * (parseInt(canvas.width, 10) / 7),
            y: -canvas.height / 4,
            c: color
          })
        );
      }
      return pens;
    case '3':
      pens.length = 0;
      for (let i = 0; i < 4; i += 1) {
        if (i > 0 && i < 3) {
          color = 'rgb(200,0,200)';
        } else {
          color = 'rgb(250,130,0)';
        }
        pens.push(
          new Pen({
            ctx,
            x: (i + 3.5)
             * (parseInt(canvas.width, 10) / 10),
            y: -canvas.height / 4,
            c: color
          })
        );
      }
      return pens;
    case '4':
      pens.length = 0;
      for (let i = 0; i < 6; i += 1) {
        if (i === 0 || i === 3 || i === 4 || i === 5) {
          color = 'rgb(250,130,0)';
        } else {
          color = 'rgb(200,0,200)';
        }
        pens.push(
          new Pen({
            ctx,
            x: (i + 3.5)
             * (parseInt(canvas.width, 10) / 10),
            y: canvas.height / 4,
            c: color
          })
        );
      }
      pens[4].x = (49 * parseInt(canvas.width, 10)) / 50;
      pens[4].y = -canvas.height / 8;
      pens[5].x = (49 * parseInt(canvas.width, 10)) / 50;
      pens[5].y = canvas.height / 8;
      return pens;
    case '5':
      pens.length = 0;
      for (let i = 0; i < 10; i += 1) {
        if (i === 4 || i === 5) {
          color = 'rgb(250,130,0)';
        } else {
          color = 'rgb(200,0,200)';
        }
        pens.push(
          new Pen({
            ctx,
            x: (Math.floor(i / 2))
             * (parseInt(canvas.width, 10) / 10) + canvas.width / 3.3,
            y: (canvas.height / 4) - (i % 2) * (canvas.height / 2),
            c: color
          })
        );
      }
      return pens;

    case '6':
      pens.length = 0;
      for (let i = 0; i < 26; i += 1) {
        if (i === 0 || i === 1
          || i === 12 || i === 13
          || i === 24 || i === 25
        ) {
          color = 'rgb(250,130,0)';
        } else {
          color = 'rgb(200,0,200)';
        }
        pens.push(
          new Pen({
            ctx,
            x: (Math.floor(i / 2))
               * (parseInt(canvas.width, 10) / 12.5) + canvas.width / 48,
            y: (canvas.height / 4) - (i % 2) * (canvas.height / 2),
            c: color
          })
        );
      }
      return pens;

    default:
      return pens;
  }
};

export {
  reset, grabChain, shakeChain, releaseChain, levelSet
};
