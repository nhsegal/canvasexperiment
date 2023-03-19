const circle = (ctx, x, y, r, c) => {
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = c;
  ctx.fill();
};

export default circle;
