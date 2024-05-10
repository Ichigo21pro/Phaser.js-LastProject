import { Scene } from "phaser";

var VicLoose = 0;
var gameOver = false;
var scoreTime;
var tiempo = 0;
var LlegoTrayectoFinal = false;
var primerTrayecto = false;
var segundoTrayecto = false;
var tercerTrayecto = false;
var cuatroTrayecto = false;
var finalTrayecto = false;

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
    // pipes
    //
    const spritePipePrimero = this.add.sprite(0, 0, "pipe_recto");
    spritePipePrimero.setScale(0.35);
    //
    const spritePipeSegundo = this.add.sprite(0, 0, "pipe_3");
    spritePipeSegundo.setScale(0.35);
    //
    const spritePipeTercero = this.add.sprite(0, 0, "pipe_curvo");
    spritePipeTercero.setScale(0.35);
    //
    const spritePipeCuarto = this.add.sprite(0, 0, "pipe_curvo");
    spritePipeCuarto.setScale(0.35);
    //
    const spritePipeFinal = this.add.sprite(0, 0, "pipe_recto");
    spritePipeFinal.setScale(0.35);
    //

    //pipe inicio
    const spritePipeInicio = this.add.sprite(20, 50, "pipe_inicio");
    spritePipeInicio.setScale(0.35);

    //containers pipe 1
    const containerPipe1 = this.add.container(110, 50);
    containerPipe1.angle = 0 /*180*/; // Girar el sprite 90 grados en el sentido horario
    if (containerPipe1.angle == 180 || containerPipe1.angle == 0) {
      primerTrayecto = true;
    }
    //add all to container
    containerPipe1.add(spritePipePrimero);
    ///////////////////////////////
    //containers pipe 2
    const containerPipe2 = this.add.container(200, 50);
    containerPipe2.angle = 0 /*180*/; // Girar el sprite 90 grados en el sentido horario
    if (containerPipe2.angle == 0) {
      segundoTrayecto = true;
    }
    //add all to container
    containerPipe2.add(spritePipeSegundo);
    ///////////////////////////////
    //containers pipe 3
    const containerPipe3 = this.add.container(200, 140);
    containerPipe3.angle = 180 /*180*/; // Girar el sprite 90 grados en el sentido horario
    if (containerPipe3.angle == 180) {
      tercerTrayecto = true;
    }
    //add all to container
    containerPipe3.add(spritePipeTercero);
    ///////////////////////////////
    //containers pipe 4
    const containerPipe4 = this.add.container(290, 50);
    containerPipe4.angle = 0 /*180*/; // Girar el sprite 90 grados en el sentido horario
    if (containerPipe4.angle == 0) {
      tercerTrayecto = true;
    }
    //add all to container
    containerPipe4.add(spritePipeCuarto);
    ///////////////////////////////
    const containerPipeFinal = this.add.container(647, 565);
    containerPipeFinal.angle = 0 /*90*/; // Girar el sprite 90 grados en el sentido horario
    if (containerPipeFinal.angle == 90 || containerPipeFinal.angle == -90) {
      finalTrayecto = true;
    }
    //add all to container
    containerPipeFinal.add(spritePipeFinal);

    //////////////////////// WATER /////////////////////////////
    // Crear un sprite usando el sprite sheet
    this.water = this.add.sprite(750 + 45, 543 + 94, "water");
    this.anims.create({
      key: "corriente",
      frames: this.anims.generateFrameNumbers("water", {
        start: 0,
        end: 7,
      }), // Cambia estos valores según tu sprite sheet
      frameRate: 40, // Velocidad de la animación
      repeat: -1, // -1 para repetir indefinidamente
    });
    this.water.anims.play("corriente");
    this.water.setScale(0.25);
    this.water.setVisible(false);
    if (LlegoTrayectoFinal) {
      this.water.setVisible(true);
    }

    ///////////////////////// GRIFO /////////////////////////////
    // Crear un sprite usando el sprite sheet
    this.grifo = this.add.sprite(750, 543, "grifo"); // Posición inicial del sprite
    this.grifo.setScale(0.2); // Reducir el tamaño del grifo

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
    // Comenzar la animaciónÇ
    if (LlegoTrayectoFinal) {
      this.grifo.anims.play("open");
    }

    //////////////////////// BAÑERA /////////////////////////////
    // Añadir el sprite a la escena
    const spriteBañera = this.add.sprite(
      this.grifo.x + 100,
      this.grifo.y + 180,
      "bañera"
    );
    spriteBañera.setScale(0.2);
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
