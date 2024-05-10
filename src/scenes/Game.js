import { Scene } from "phaser";

var score = 0;
var gameOver = false;
var scoreTime;
var tiempo = 0;

var backgroundMusic;
var musicaActivada = true;
//
export class Game extends Scene {
  constructor() {
    super("Game");
  }

  //////////////////////////////////////////////////// CREATE //////////////////////////////////////////////////
  create() {}
  //////////////////////////////////////////////////// UPDATE //////////////////////////////////////////////////
  update(time, deltaTime) {}

  //////////////////////////////////////////////// OTHER FUNCTION ////////////////////////////////////////////
  //////////////////// GAME OVER /////////////////
  gameOver() {
    // Cambiar a la escena de Gameover y pasar la puntuación y el tiempo como datos
    this.scene.start("GameOver", {
      score: score,
      tiempo: this.tiempoFormateado,
    });
    //backgroundMusic.stop();
    musicaActivada = false;
    tiempo = 0;
    score = 0;
  }
}
