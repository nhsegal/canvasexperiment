class Link {
  constructor(ctx, x, linkSize) {
    this.ctx = ctx;
    this.x = x;
    this.y = 0;
    this.py = 0;
    this.fy = 0;
    this.linkSize = linkSize;
  }

  display(scale) {
    this.ctx.scale(scale, scale);
    this.ctx.fillStyle = 'black';
    let circle = new Path2D(); // <<< Declaration
    circle.arc(this.x, this.x, this.linkSize, 0, 2 * Math.PI, false);
    this.ctx.fill(circle); //   <<< pass circle to context
  }
}

export default Link;
