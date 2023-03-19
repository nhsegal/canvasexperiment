const buildCanvas = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  document.getElementById('canvas_container').append(canvas);
};

export default buildCanvas;
