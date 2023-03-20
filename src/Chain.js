import Link from './Link';
import circle from './circle';

class Chain {
  constructor(ctx, length, dx, dt) {
    this.ctx = ctx;
    this.length = length;
    this.linkSize = 2 * dx;
    this.links = [];
    this.dt = 2 * dt;
    this.isDragging = false;

    for (let i = 0; i < this.length / this.linkSize; i += 1) {
      this.links.push(new Link(
        this.ctx,
        i * 1 * this.linkSize,
        8 * dx
      ));
    }
  }

  display(end) {
    const ctx = this.ctx;
    for (let i = 0; i < this.links.length - 1; i += 1) {
      if (i === 0) {
        if (this.isDragging) {
          circle(ctx, this.links[i].x, this.links[i].y, 3 * this.linkSize, 'rgb(250, 0, 0)');
        } else {
          circle(ctx, this.links[i].x, this.links[i].y, 3 * this.linkSize, 'rgb(200, 0, 0)');
        }
      } else if (i % 8 === 0) {
        this.links[i].display();
      }
    }
    let lastLinkColor = 'rgb(250, 0, 0)';
    if (end === 'fixed') {
      lastLinkColor = 'rgb(0, 0, 240)';
    } else if (end === 'free') {
      lastLinkColor = 'rgb(0, 200, 0)';
    } else if (end === 'mirror') {
      lastLinkColor = 'rgb(200, 0, 0)';
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
      this.links[this.links.length - 1].fy = this.links[0].fy;
    } else if (end === 'mirror' && !this.isDragging) {
      this.links[this.links.length - 1].fy = this.links[this.links.length - 2].y;
      this.links[this.links.length - 1].y = this.links[this.links.length - 1].fy;
    } else if (end === 'antimirror' && this.isDragging) {
      this.links[this.links.length - 1].fy = -this.links[0].fy;
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
