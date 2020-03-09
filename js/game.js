class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    // referencing the game (this) inside the player class
    this.player = new Player(this);
    this.player.setControls();
    this.obstacles = [];
    // this.obstacle = new Obstacle(this);
    this.animationId;
    this.frame = 0;
    this.gameOn = true;
  }
  start() {
    console.log("Game started!");
    this.reset();
    this.animation();
  }

  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.player.draw();
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
    }
  }
  update() {
    this.frame++;
    this.player.update();
    if (this.frame % 100 === 0) {
      this.obstacles.push(new Obstacle(this));
    }
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].update();
      if (this.obstacles[i].x + this.obstacles[i].width < 0) {
        this.obstacles.shift();
      }
      if (this.player.crashWith(this.obstacles[i])) {
        this.gameOn = false;
      }
    }
  }
  animation() {
    this.draw();
    this.update();
    this.animationId = window.requestAnimationFrame(() => {
      if (this.gameOn) {
        this.animation();
      } else {
        this.gameOver();
      }
    });
  }

  gameOver() {
    // window.cancelAnimationFrame(this.animationId);
    this.context.fillStyle = "red";
    this.context.fillText("GAME OVER!", this.width / 2, this.height / 2);
  }
  reset() {
    this.player = new Player(this);
    this.player.setControls();
    this.obstacles = [];
    this.frame = 0;
    this.gameOn = true;
  }
}
