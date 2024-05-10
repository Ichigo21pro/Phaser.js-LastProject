import { Scene } from "phaser";

var VicLoose = 0;
var gameOver = false;
var scoreTime;
var tiempo = 0;
var LlegoTrayectoFinal = false;

var backgroundMusic;
var musicaActivada = true;
//
export class Game extends Scene {
  constructor() {
    super("Game");
  }

  //////////////////////////////////////////////////// CREATE //////////////////////////////////////////////////
  create() {
    ///////////////////// BACKGROUND JUEGO ////////////////////////
    this.add
      .image(0, 0, "gameBackGround")
      .setOrigin(0, 0)
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);
    ////////////////////////// PIPES /////////////////////////////

    ///////////////////////// GRIFO /////////////////////////////
    // Crear un sprite usando el sprite sheet
    this.grifo = this.add.sprite(800, 550, "grifo"); // Posición inicial del sprite
    this.grifo.setScale(0.1); // Reducir el tamaño del grifo

    // Definir una animación del grifo
    this.anims.create({
      key: "open",
      frames: this.anims.generateFrameNumbers("grifo", {
        start: 0,
        end: 2,
      }), // Cambia estos valores según tu sprite sheet
      frameRate: 10, // Velocidad de la animación
      repeat: -1, // -1 para repetir indefinidamente
    });
    // Comenzar la animación
    this.grifo.anims.play("open");
    //////////////////////// WATER /////////////////////////////
  }
  //////////////////////////////////////////////////// UPDATE //////////////////////////////////////////////////
  update(time, deltaTime) {}

  //////////////////////////////////////////////// OTHER FUNCTION ////////////////////////////////////////////
  //////////////////// GAME OVER /////////////////
  gameOver() {
    // Cambiar a la escena de Gameover y pasar la puntuación
    this.scene.start("GameOver", {
      score: VicLoose,
    });
    //backgroundMusic.stop();
    musicaActivada = false;
    VicLoose = 0;
  }
}
