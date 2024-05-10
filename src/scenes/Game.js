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
var quintoTrayecto = false;
var sextotrayecto = false;
var septimotrayecto = false;
var octavotrayecto = false;
var novenotrayecto = false;
var decimotrayecto = false;
var onceavotrayecto = false;
var doceavotrayecto = false;
var trecetrayecto = false;
var catorcetrayecto = false;
var quincetrayecto = false;
var diezSeistrayecto = false;
var diezSietetrayecto = false;
var diezOchotrayecto = false;
var diezNuevetrayecto = false;
var veintetrayecto = false;
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
    const spritePipeQuinto = this.add.sprite(0, 0, "pipe_3");
    spritePipeQuinto.setScale(0.35);
    //
    const spritePipeSexto = this.add.sprite(0, 0, "pipe_recto");
    spritePipeSexto.setScale(0.35);
    //
    const spritePipeSeptimo = this.add.sprite(0, 0, "pipe_curvo");
    spritePipeSeptimo.setScale(0.35);
    //
    const spritePipeOctavo = this.add.sprite(0, 0, "pipe_curvo");
    spritePipeOctavo.setScale(0.35);
    //
    const spritePipeNoveno = this.add.sprite(0, 0, "pipe_3");
    spritePipeNoveno.setScale(0.35);
    //
    const spritePipeDecimo = this.add.sprite(0, 0, "pipe_curvo");
    spritePipeDecimo.setScale(0.35);
    //
    const spritePipeOnceavo = this.add.sprite(0, 0, "pipe_curvo");
    spritePipeOnceavo.setScale(0.35);
    //
    const spritePipeDoce = this.add.sprite(0, 0, "pipe_3");
    spritePipeDoce.setScale(0.35);
    //
    const spritePipeTrece = this.add.sprite(0, 0, "pipe_recto");
    spritePipeTrece.setScale(0.35);
    //
    const spritePipeCatorce = this.add.sprite(0, 0, "pipe_recto");
    spritePipeCatorce.setScale(0.35);
    //
    const spritePipeQuince = this.add.sprite(0, 0, "pipe_3");
    spritePipeQuince.setScale(0.35);
    //
    const spritePipe16 = this.add.sprite(0, 0, "pipe_curvo");
    spritePipe16.setScale(0.35);
    //
    const spritePipe17 = this.add.sprite(0, 0, "pipe_curvo");
    spritePipe17.setScale(0.35);
    //
    const spritePipe18 = this.add.sprite(0, 0, "pipe_curvo");
    spritePipe18.setScale(0.35);
    //
    const spritePipe19 = this.add.sprite(0, 0, "pipe_recto");
    spritePipe19.setScale(0.35);
    //
    const spritePipe20 = this.add.sprite(0, 0, "pipe_3");
    spritePipe20.setScale(0.35);
    //
    const spritePipeFinal = this.add.sprite(0, 0, "pipe_recto");
    spritePipeFinal.setScale(0.35);
    //

    //pipe inicio
    const spritePipeInicio = this.add.sprite(20, 50, "pipe_inicio");
    spritePipeInicio.setScale(0.35);

    //containers pipe 1
    const containerPipe1 = this.add.container(110, 50);
    containerPipe1.angle = 0 /*0,180*/; // Girar el sprite
    if (containerPipe1.angle == 180 || containerPipe1.angle == 0) {
      primerTrayecto = true;
    }
    //add all to container
    containerPipe1.add(spritePipePrimero);
    ///////////////////////////////
    //containers pipe 2
    const containerPipe2 = this.add.container(200, 50);
    containerPipe2.angle = 0 /*0*/; // Girar el sprite
    if (containerPipe2.angle == 0) {
      segundoTrayecto = true;
    }
    //add all to container
    containerPipe2.add(spritePipeSegundo);
    ///////////////////////////////
    //containers pipe 3
    const containerPipe3 = this.add.container(200, 140);
    containerPipe3.angle = 180 /*180*/; // Girar el sprite
    if (containerPipe3.angle == 180) {
      tercerTrayecto = true;
    }
    //add all to container
    containerPipe3.add(spritePipeTercero);
    ///////////////////////////////
    //containers pipe 4
    const containerPipe4 = this.add.container(290, 50);
    containerPipe4.angle = 0 /*0*/; // Girar el sprite
    if (containerPipe4.angle == 0) {
      cuatroTrayecto = true;
    }
    //add all to container
    containerPipe4.add(spritePipeCuarto);
    ///////////////////////////////
    //containers pipe 5
    const containerPipe5 = this.add.container(290, 140);
    containerPipe5.angle = 90 /*90*/; // Girar el sprite
    if (containerPipe5.angle == 90) {
      quintoTrayecto = true;
    }
    //add all to container
    containerPipe5.add(spritePipeQuinto);
    ///////////////////////////////
    //containers pipe 6
    const containerPipe6 = this.add.container(290, 230);
    containerPipe6.angle = 90 /*90*/; // Girar el sprite
    if (containerPipe6.angle == 90) {
      sextotrayecto = true;
    }
    //add all to container
    containerPipe6.add(spritePipeSexto);
    ///////////////////////////////
    //containers pipe 7
    const containerPipe7 = this.add.container(290, 320);
    containerPipe7.angle = 180 /*180*/; // Girar el sprite
    if (containerPipe7.angle == 180) {
      septimotrayecto = true;
    }
    //add all to container
    containerPipe7.add(spritePipeSeptimo);
    ///////////////////////////////
    //containers pipe 8
    const containerPipe8 = this.add.container(380, 320);
    containerPipe8.angle = 90 /*90*/; // Girar el sprite
    if (containerPipe8.angle == 90) {
      octavotrayecto = true;
    }
    //add all to container
    containerPipe8.add(spritePipeOctavo);
    ///////////////////////////////
    //containers pipe 9
    const containerPipe9 = this.add.container(380, 230);
    containerPipe9.angle = -90 /*-90*/; // Girar el sprite
    if (containerPipe9.angle == -90) {
      novenotrayecto = true;
    }
    //add all to container
    containerPipe9.add(spritePipeNoveno);
    ///////////////////////////////
    //containers pipe 10
    const containerPipe10 = this.add.container(380, 140);
    containerPipe10.angle = -90 /*-90*/; // Girar el sprite
    if (containerPipe10.angle == -90) {
      decimotrayecto = true;
    }
    //add all to container
    containerPipe10.add(spritePipeDecimo);
    ///////////////////////////////
    //containers pipe 11
    const containerPipe11 = this.add.container(470, 140);
    containerPipe11.angle = 0 /*0*/; // Girar el sprite
    if (containerPipe11.angle == 0) {
      onceavotrayecto = true;
    }
    //add all to container
    containerPipe11.add(spritePipeOnceavo);
    ///////////////////////////////
    //containers pipe 12
    const containerPipe12 = this.add.container(470, 230);
    containerPipe12.angle = 90 /*90*/; // Girar el sprite
    if (containerPipe12.angle == 90) {
      doceavotrayecto = true;
    }
    //add all to container
    containerPipe12.add(spritePipeDoce);
    ///////////////////////////////
    //containers pipe 13
    const containerPipe13 = this.add.container(470, 310);
    containerPipe13.angle = 90 /*90*/; // Girar el sprite
    if (containerPipe13.angle == 90) {
      trecetrayecto = true;
    }
    //add all to container
    containerPipe13.add(spritePipeTrece);
    ///////////////////////////////
    //containers pipe 14
    const containerPipe14 = this.add.container(470, 400);
    containerPipe14.angle = 90 /*90*/; // Girar el sprite
    if (containerPipe14.angle == 90) {
      catorcetrayecto = true;
    }
    //add all to container
    containerPipe14.add(spritePipeCatorce);
    ///////////////////////////////
    //containers pipe 15
    const containerPipe15 = this.add.container(470, 490);
    containerPipe15.angle = 180 /*180*/; // Girar el sprite
    if (containerPipe15.angle == 180) {
      quincetrayecto = true;
    }
    //add all to container
    containerPipe15.add(spritePipeQuince);
    ///////////////////////////////
    //containers pipe 16
    const containerPipe16 = this.add.container(380, 490);
    containerPipe16.angle = -90 /*-90*/; // Girar el sprite
    if (containerPipe16.angle == -90) {
      diezSeistrayecto = true;
    }
    //add all to container
    containerPipe16.add(spritePipe16);
    ///////////////////////////////
    //containers pipe 17
    const containerPipe17 = this.add.container(380, 580);
    containerPipe17.angle = 180 /*180*/; // Girar el sprite
    if (containerPipe17.angle == 180) {
      diezSietetrayecto = true;
    }
    //add all to container
    containerPipe17.add(spritePipe17);
    ///////////////////////////////
    //containers pipe 18
    const containerPipe18 = this.add.container(560, 490);
    containerPipe18.angle = 0 /*0*/; // Girar el sprite
    if (containerPipe18.angle == 0) {
      diezOchotrayecto = true;
    }
    //add all to container
    containerPipe18.add(spritePipe18);
    ///////////////////////////////
    //containers pipe 19
    const containerPipe19 = this.add.container(470, 580);
    containerPipe19.angle = 0 /*180,0*/; // Girar el sprite
    if (containerPipe19.angle == 180 || containerPipe19.angle == 0) {
      diezNuevetrayecto = true;
    }
    //add all to container
    containerPipe19.add(spritePipe19);
    ///////////////////////////////
    //containers pipe 20
    const containerPipe20 = this.add.container(560, 580);
    containerPipe20.angle = 180 /*180*/; // Girar el sprite
    if (containerPipe20.angle == 180) {
      veintetrayecto = true;
    }
    //add all to container
    containerPipe20.add(spritePipe20);
    ///////////////////////////////
    const containerPipeFinal = this.add.container(650, 580);
    containerPipeFinal.angle = 180 /*0,180*/; // Girar el sprite 90 grados en el sentido horario
    if (containerPipeFinal.angle == 0 || containerPipeFinal.angle == 180) {
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
    this.grifo = this.add.sprite(750, 555, "grifo"); // Posición inicial del sprite
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

    ///////////////////////CONDICION/////////////////////////
    if (
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto &&
      cuatroTrayecto &&
      quintoTrayecto &&
      sextotrayecto &&
      septimotrayecto &&
      octavotrayecto &&
      novenotrayecto &&
      decimotrayecto &&
      onceavotrayecto &&
      doceavotrayecto &&
      trecetrayecto &&
      catorcetrayecto &&
      quincetrayecto &&
      diezSeistrayecto &&
      diezSietetrayecto &&
      diezOchotrayecto &&
      diezNuevetrayecto &&
      veintetrayecto
    ) {
      finalTrayecto = true;
    }
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
