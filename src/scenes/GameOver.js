import { Scene } from "phaser";

export class GameOver extends Scene {
  constructor() {
    super("GameOver");
  }

  create(data) {
    this.add
      .image(0, 0, "yellowBack")
      .setOrigin(0, 0)
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    var gameLogo = this.add.image(512, 380, "gameLogo");
  }
}
