import hitSound from './cowbell.wav';
import circle from './circle';

class Pen {
  constructor({
    canvas, ctx, x, y, c, scale
  }) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.scale = scale;
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
    ctx.fillStyle = this.color;
    if (this.hit) {
      if (this.y > ctx.height / 2) {
        ctx.rect(this.x, this.y, this.r, this.r * 5);
      } else if (this.y < ctx.height / 2) {
        ctx.rect(this.x, this.y - this.r * 5, this.r, this.r * 5);
      }
    } else {
      circle(ctx, this.x, this.y, this.r, this.c);
    }
  }

  hitCheck(chain) {
    if (
      ((this.x
      > chain.links[parseInt((this.x / chain.linkSize) - 2, 10)].x - 2 * chain.linkSize
      && this.x
        < chain.links[parseInt((this.x / chain.linkSize) - 2, 10)].x + 2 * chain.linkSize
      && this.y
       > chain.links[parseInt((this.x / chain.linkSize) - 2, 10)].y - 2 * chain.linkSize
     && (this.y < -2))
      || (this.x
        > chain.links[parseInt((this.x / chain.linkSize) - 2, 10)].x - 2 * chain.linkSize
        && this.x
          < chain.links[parseInt((this.x / chain.linkSize) - 2, 10)].x + 2 * chain.linkSize
        && this.y
         < chain.links[parseInt((this.x / chain.linkSize) - 2, 10)].y + 2 * chain.linkSize
       && (this.y > 0)))
      && this.hit === false

    ) {
      this.hit = true;
      this.effect.play();
      return true;
    }
    return false;
  }
}

export default Pen;
