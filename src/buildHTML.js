const buildCanvas = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  document.getElementById('p5container').append(canvas);
};

export default buildCanvas;
// Set actual size in memory (scaled to account for extra pixel density).
