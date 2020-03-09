class Player {
  constructor(game) {
    this.context = game.context;
    this.x = game.width / 4;
    this.y = game.height / 2;

    this.width = 30;
    this.height = 30;

    this.speedX = 0;
    this.speedY = 0;
  }
  draw() {
    this.context.save();
    this.context.fillStyle = "pink";
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.restore();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  setControls() {
    window.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 38: // up key
          this.speedY = -3;
          break;
        case 40: // down key
          this.speedY = 3;
          break;
        case 39: // right key
          this.speedX = 3;
          break;
        case 37: // left key
          this.speedX = -3;
          break;
      }
    });
    window.addEventListener("keyup", event => {
      this.speedX = 0;
      this.speedY = 0;
    });
  }
}
