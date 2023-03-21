import circle from './circle';
class Link {
  constructor({ ctx, x, linkSize }) {
    this.ctx = ctx;
    this.x = x;
    this.y = 0;
    this.py = 0;
    this.fy = 0;
    this.linkSize = linkSize;
  }

  display(color) {
    const ctx = this.ctx;
    circle(ctx, this.x, this.y, this.linkSize, color);
  }
}

export default Link;
