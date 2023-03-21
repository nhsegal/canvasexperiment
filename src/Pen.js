import hitSound from './cowbell.wav';

class Pen {
  constructor({
    ctx, x, y, c
  }) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = 10;
    this.color = c;// this.ctx.color(c);
    this.hit = false;
    this.effect = new Audio(hitSound);
    this.effect.load();
  }

  display() {
    const ctx = this.ctx;
    ctx.fill(this.color);
    ctx.noStroke();
    if (this.hit) {
      if (this.y > ctx.height / 2) {
        ctx.rect(this.x, this.y, this.r, this.r * 5);
      } else if (this.y < ctx.height / 2) {
        ctx.rect(this.x, this.y - this.r * 5, this.r, this.r * 5);
      }
    } else {
      ctx.circle(this.x, this.y, this.r);
    }
  }

  hitCheck(chain) {
    const ctx = this.ctx;
    if (

      ((this.x > chain.links[Math.floor(this.x / chain.linkSize)].x - chain.linkSize)
      && (this.x < chain.links[Math.floor(this.x / chain.linkSize)].x + chain.linkSize)

      && (((this.y > chain.links[Math.floor(this.x / chain.linkSize)].y - chain.linkSize
          + ctx.height / 2)
      && (this.y < ctx.height / 2))

      || ((this.y < chain.links[Math.floor(this.x / chain.linkSize)].y + chain.linkSize
          + ctx.height / 2
      && (this.y > ctx.height / 2)))))
      && this.hit === false

    ) {
      this.hit = true;
      this.effect.play();
    }
    return false;
  }
}

export default Pen;
