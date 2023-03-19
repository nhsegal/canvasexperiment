const drawBackground = (canvas, width, height, scale) => {
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);
  ctx.fillStyle = '#d8d8d8';
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = '#787878';
  for (let i = 0; i < 6; i += 1) {
    ctx.beginPath();
    ctx.moveTo(0, (i * height) / 6);
    ctx.lineTo(width, (i * height) / 6);
    ctx.closePath();
    ctx.stroke();
  }
};

export default drawBackground;
