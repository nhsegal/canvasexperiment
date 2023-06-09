import Link from './Link';
import circle from './circle';

class Chain {
  constructor({
    ctx, length, dx, dt, scale, res
  }) {
    this.ctx = ctx;
    this.length = length * res;
    this.linkSize = dx;
    this.links = [];
    this.dt = dt;
    this.isDragging = false;
    this.scale = scale;
    this.res = res;

    this.links.push(new Link({
      ctx: this.ctx,
      x: 2 * this.linkSize,
      linkSize: 2 * this.linkSize
    }));

    for (let i = 1; i < this.length / this.linkSize; i += 1) {
      this.links.push(new Link(
        {
          ctx: this.ctx,
          x: (i * dx) / this.res + (2 * this.linkSize),
          linkSize: this.linkSize
        }
      ));
    }
  }

  display(end) {
    const ctx = this.ctx;
    const res = this.res;
    for (let i = 1; i < this.links.length - 1; i += 1) {
      if (i % (48 * res) === 0) {
        this.links[i].display('rgb(250,235,0');
      } else if (i % (2 * res) === 0) {
        this.links[i].display('rgb(0,0,0');
      }
    }

    if (this.isDragging) {
      circle(ctx, this.links[0].x, this.links[0].y, this.links[0].linkSize, 'rgb(250, 0, 0)');
    } else {
      circle(ctx, this.links[0].x, this.links[0].y, this.links[0].linkSize, 'rgb(180, 0, 0)');
    }

    let lastLinkColor = 'rgb(250, 0, 0)';
    if (end === 'fixed') {
      lastLinkColor = 'rgb(0, 0, 0)';
    } else if (end === 'free') {
      lastLinkColor = 'rgb(250, 250, 0)';
    } else if (end === 'mirror') {
      lastLinkColor = 'rgb(0, 190, 0)';
    } else if (end === 'antimirror') {
      lastLinkColor = 'rgb(0, 30, 220)';
    }

    circle(
      ctx,
      this.links[this.links.length - 1].x,
      this.links[this.links.length - 1].y,
      2 * this.linkSize,
      lastLinkColor
    );
  }

  move(end) {
    for (let i = 1; i < this.links.length - 1; i += 1) {
      this.links[i].fy = ((this.dt / this.linkSize) ** 2)
      * (this.links[i - 1].y - 2 * this.links[i].y + this.links[i + 1].y)
        + 2 * this.links[i].y
        - this.links[i].py;
    }
    if (end === 'free') {
      this.links[this.links.length - 1].fy = -(this.links[this.links.length - 1].y
            - this.links[this.links.length - 2].y)
        + 2 * this.links[this.links.length - 1].y
        - this.links[this.links.length - 1].py;
    } else if (end === 'fixed') {
      this.links[this.links.length - 1].fy = 0;
    } else if (end === 'mirror' && this.isDragging) {
      this.links[this.links.length - 1].fy = this.links[0].y;
      this.links[this.links.length - 1].y = this.links[0].y;
      this.links[this.links.length - 1].py = this.links[0].y;
    } else if (end === 'mirror' && !this.isDragging) {
      this.links[this.links.length - 1].fy = this.links[this.links.length - 2].y;
      this.links[this.links.length - 1].y = this.links[this.links.length - 1].fy;
    } else if (end === 'antimirror' && this.isDragging) {
      this.links[this.links.length - 1].fy = -this.links[0].y;
      this.links[this.links.length - 1].y = -this.links[0].y;
      this.links[this.links.length - 1].py = -this.links[0].y;
    } else if (end === 'antimirror' && !this.isDragging) {
      this.links[this.links.length - 1].fy = this.links[this.links.length - 2].y;
      this.links[this.links.length - 1].y = this.links[this.links.length - 1].fy;
    }

    if (!this.isDragging) {
      this.links[0].fy = this.links[1].y;
      this.links[0].y = this.links[0].fy;
    }
    for (let i = 1; i < this.links.length; i += 1) {
      this.links[i].py = this.links[i].y;
      this.links[i].y = this.links[i].fy;
    }
  }
}

export default Chain;
