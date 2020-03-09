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
  }
  start() {
    console.log("Game started!");
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
    }
  }
  animation() {
    this.draw();
    this.update();
    this.animationId = window.requestAnimationFrame(() => {
      this.animation();
    });
  }
}
