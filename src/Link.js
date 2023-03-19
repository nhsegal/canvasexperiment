class Link {
  constructor(p, x, linkSize) {
    this.p = p;
    this.x = x;
    this.y = 0;
    this.py = 0;
    this.fy = 0;
    this.linkSize = linkSize;
  }

  display() {
    const p = this.p;
    p.fill(0);
    p.noStroke();
    p.circle(this.x + 0.5, this.y + p.height / 2 + 0.5, this.linkSize - 0.5);
  }
}

export default Link;
