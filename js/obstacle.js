class Obstacle {
  constructor(game) {
    this.context = game.context;
    this.width = 20;
    this.height = 100;
    this.x = game.width + this.width;
    this.y = Math.floor(Math.random() * game.height);
    this.speed = -3;
  }

  draw() {
    this.context.save();
    this.context.fillStyle = "green";
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.restore();
  }

  update() {
    this.x += this.speed;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}
