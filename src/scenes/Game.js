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
//
var seMueveElAgua = false;

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
    //this.crearContainer(containerPipe1, 110, 50, 0, 180, primerTrayecto);
    this.containerPipe1 = this.add.container(110, 50);
    this.containerPipe1.angle = 0 /*0,180*/; // Girar el sprite

    //add all to container and iteractive
    this.containerPipe1.add(spritePipePrimero);
    this.containerPipe1.setSize(60, 60);
    this.containerPipe1.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe1.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe1);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 2
    this.containerPipe2 = this.add.container(200, 50);
    this.containerPipe2.angle = 0 /*0*/; // Girar el sprite

    //add all to container
    this.containerPipe2.add(spritePipeSegundo);
    this.containerPipe2.setSize(60, 60);
    this.containerPipe2.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe2.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe2);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 3
    this.containerPipe3 = this.add.container(200, 140);
    this.containerPipe3.angle = -180 /*-180*/; // Girar el sprite

    //add all to container
    this.containerPipe3.add(spritePipeTercero);
    this.containerPipe3.setSize(60, 60);
    this.containerPipe3.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe3.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe3);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 4
    this.containerPipe4 = this.add.container(290, 50);
    this.containerPipe4.angle = 0 /*0*/; // Girar el sprite

    //add all to container
    this.containerPipe4.add(spritePipeCuarto);
    this.containerPipe4.setSize(60, 60);
    this.containerPipe4.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe4.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe4);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 5
    this.containerPipe5 = this.add.container(290, 140);
    this.containerPipe5.angle = 90 /*90*/; // Girar el sprite

    //add all to container
    this.containerPipe5.add(spritePipeQuinto);
    this.containerPipe5.setSize(60, 60);
    this.containerPipe5.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe5.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe5);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 6
    this.containerPipe6 = this.add.container(290, 230);
    this.containerPipe6.angle = 90 /*90*/; // Girar el sprite

    //add all to container
    this.containerPipe6.add(spritePipeSexto);
    this.containerPipe6.setSize(60, 60);
    this.containerPipe6.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe6.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe6);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 7
    this.containerPipe7 = this.add.container(290, 320);
    this.containerPipe7.angle = 180 /*180*/; // Girar el sprite

    //add all to container
    this.containerPipe7.add(spritePipeSeptimo);
    this.containerPipe7.setSize(60, 60);
    this.containerPipe7.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe7.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe7);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 8
    this.containerPipe8 = this.add.container(380, 320);
    this.containerPipe8.angle = 90 /*90*/; // Girar el sprite

    //add all to container
    this.containerPipe8.add(spritePipeOctavo);
    this.containerPipe8.setSize(60, 60);
    this.containerPipe8.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe8.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe8);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 9
    this.containerPipe9 = this.add.container(380, 230);
    this.containerPipe9.angle = -90 /*-90*/; // Girar el sprite

    //add all to container
    this.containerPipe9.add(spritePipeNoveno);
    this.containerPipe9.setSize(60, 60);
    this.containerPipe9.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe9.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe9);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 10
    this.containerPipe10 = this.add.container(380, 140);
    this.containerPipe10.angle = -90 /*-90*/; // Girar el sprite

    //add all to container
    this.containerPipe10.add(spritePipeDecimo);
    this.containerPipe10.setSize(60, 60);
    this.containerPipe10.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe10.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe10);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 11
    this.containerPipe11 = this.add.container(470, 140);
    this.containerPipe11.angle = 0 /*0*/; // Girar el sprite

    //add all to container
    this.containerPipe11.add(spritePipeOnceavo);
    this.containerPipe11.setSize(60, 60);
    this.containerPipe11.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe11.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe11);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 12
    this.containerPipe12 = this.add.container(470, 230);
    this.containerPipe12.angle = 90 /*90*/; // Girar el sprite

    //add all to container
    this.containerPipe12.add(spritePipeDoce);
    this.containerPipe12.setSize(60, 60);
    this.containerPipe12.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe12.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe12);
        console.log("pulsado");
      },
      this
    );
    ///////////////////////////////
    //containers pipe 13
    this.containerPipe13 = this.add.container(470, 320);
    this.containerPipe13.angle = 90 /*90*/; // Girar el sprite

    //add all to container
    this.containerPipe13.add(spritePipeTrece);
    this.containerPipe13.setSize(60, 60);
    this.containerPipe13.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe13.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe13);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 14
    this.containerPipe14 = this.add.container(470, 410);
    this.containerPipe14.angle = 90 /*90*/; // Girar el sprite

    //add all to container
    this.containerPipe14.add(spritePipeCatorce);
    this.containerPipe14.setSize(60, 60);
    this.containerPipe14.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe14.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe14);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 15
    this.containerPipe15 = this.add.container(470, 500);
    this.containerPipe15.angle = 180 /*180*/; // Girar el sprite

    //add all to container
    this.containerPipe15.add(spritePipeQuince);
    this.containerPipe15.setSize(60, 60);
    this.containerPipe15.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe15.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe15);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 16
    this.containerPipe16 = this.add.container(380, 500);
    this.containerPipe16.angle = -90 /*-90*/; // Girar el sprite

    //add all to container
    this.containerPipe16.add(spritePipe16);
    this.containerPipe16.setSize(60, 60);
    this.containerPipe16.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe16.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe16);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 17
    this.containerPipe17 = this.add.container(380, 590);
    this.containerPipe17.angle = 180 /*180*/; // Girar el sprite

    //add all to container
    this.containerPipe17.add(spritePipe17);
    this.containerPipe17.setSize(60, 60);
    this.containerPipe17.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe17.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe17);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 18
    this.containerPipe18 = this.add.container(560, 500);
    this.containerPipe18.angle = 0 /*0*/; // Girar el sprite

    //add all to container
    this.containerPipe18.add(spritePipe18);
    this.containerPipe18.setSize(60, 60);
    this.containerPipe18.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe18.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe18);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 19
    this.containerPipe19 = this.add.container(470, 590);
    this.containerPipe19.angle = 0 /*180,0*/; // Girar el sprite

    //add all to container
    this.containerPipe19.add(spritePipe19);
    this.containerPipe19.setSize(60, 60);
    this.containerPipe19.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe19.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe19);
      },
      this
    );
    ///////////////////////////////
    //containers pipe 20
    this.containerPipe20 = this.add.container(560, 590);
    this.containerPipe20.angle = 180 /*180*/; // Girar el sprite

    //add all to container
    this.containerPipe20.add(spritePipe20);
    this.containerPipe20.setSize(60, 60);
    this.containerPipe20.setInteractive();

    // Escuchar el evento de clic en el contenedor
    this.containerPipe20.on(
      "pointerdown",
      function (pointer) {
        this.girarContainer(this.containerPipe20);
      },
      this
    );

    // boton
    const Boton = this.add.sprite(750, 250, "boton");
    Boton.setScale(0.6);
    Boton.setInteractive();

    // Agregar evento de clic al botón
    Boton.on("pointerdown", () => {
      seMueveElAgua = true;

      // Escalar hacia arriba con una animación
      this.tweens.add({
        targets: Boton,
        scaleX: 0.7,
        scaleY: 0.7,
        duration: 150,
        ease: "Linear",
        yoyo: true, // Hacer que el botón vuelva a su escala original después de agrandarse
      });

      this.comprobarCirquito();

      console.log(this.containerPipe7.angle);
    });

    /////////
    ///////////////////////////////
    const containerPipeFinal = this.add.container(650, 590);
    containerPipeFinal.angle = 180 /*0,180*/; // Girar el sprite 90 grados en el sentido horario
    if (containerPipeFinal.angle == 0 || containerPipeFinal.angle == 180) {
      finalTrayecto = true;
    }
    //add all to container
    containerPipeFinal.add(spritePipeFinal);

    //////////////////////// WATER /////////////////////////////
    // Crear un sprite usando el sprite sheet
    this.water = this.add.sprite(750 + 45, 543 + 111, "water");
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

    ///////////////////////////
    //Splash
    this.waterSplash = this.add.sprite(0, -500, "waterSplash");

    this.anims.create({
      key: "corrienteS",
      frames: this.anims.generateFrameNumbers("waterSplash", {
        start: 0,
        end: 5,
      }), // Cambia estos valores según tu sprite sheet
      frameRate: 15, // Velocidad de la animación
      repeat: -1, // -1 para repetir indefinidamente
    });
    // this.waterSplash.setPosition(
    //   this.containerPipe1.x - 28,
    //   this.containerPipe1.y
    // );

    this.waterSplash.anims.play("corrienteS");
    this.waterSplash.setScale(1.2);
    this.waterSplash.setRotation(1.57); //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
    //this.waterSplash.setVisible(false);

    ///////////////////////// GRIFO /////////////////////////////
    // Crear un sprite usando el sprite sheet
    this.grifo = this.add.sprite(750, 565, "grifo"); // Posición inicial del sprite
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

    //////////////////////// BAÑERA /////////////////////////////
    // Añadir el sprite a la escena
    const spriteBañera = this.add.sprite(
      this.grifo.x + 100,
      this.grifo.y + 180,
      "bañera"
    );
    spriteBañera.setScale(0.2);

    ///////////////////////GIRAR CONTAINERS/////////////////////////
    // Agregamos un evento de clic al contenedor
  }

  girarContainer(containerID) {
    this.tweens.add({
      targets: containerID,
      angle: containerID.angle - 90,
      duration: 500,
      ease: "Linear",
      onComplete: function () {
        // Aquí puedes agregar cualquier lógica adicional que quieras ejecutar después de que se complete la animación
      },
    });
  }

  crearContainer(containerName, Pos1, Pos2, Angle1, Angle2, trayecto) {
    //containerss
    containerName = this.add.container(Pos1, Pos2);
    containerName.angle = 0 /*0,180*/; // Girar el sprite
    if (containerName.angle == Angle1 || containerName.angle == Angle2) {
      trayecto = true;
    }
  }

  comprobarCirquito() {
    if (this.containerPipe1.angle == 180 || this.containerPipe1.angle == 0) {
      primerTrayecto = true;
    } else {
      primerTrayecto = false;
    }
    if (!primerTrayecto) {
      this.waterSplash.setPosition(
        this.containerPipe1.x - 28,
        this.containerPipe1.y
      );
    }
    if (this.containerPipe2.angle == 0) {
      segundoTrayecto = true;
    } else {
      segundoTrayecto = false;
    }
    if (!segundoTrayecto && primerTrayecto) {
      if (
        this.containerPipe2.angle == 90 ||
        this.containerPipe2.angle == -180
      ) {
        this.waterSplash.setRotation(0);
        this.waterSplash.setPosition(
          this.containerPipe2.x,
          this.containerPipe2.y - 61
        );
      }
      if (this.containerPipe2.angle == -90) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe2.x - 24,
          this.containerPipe2.y
        );
      }
    }
    if (this.containerPipe3.angle == 180 || this.containerPipe3.angle == -180) {
      tercerTrayecto = true;
    } else {
      tercerTrayecto = false;
    }
    if (!tercerTrayecto && primerTrayecto && segundoTrayecto) {
      if (this.containerPipe3.angle == 90) {
        this.waterSplash.setRotation(4.68);
        this.waterSplash.setPosition(
          this.containerPipe3.x - 61,
          this.containerPipe3.y
        );
      }
      if (this.containerPipe3.angle == 0 || this.containerPipe3.angle == -90) {
        this.waterSplash.setRotation(3.15);
        this.waterSplash.setPosition(
          this.containerPipe3.x,
          this.containerPipe3.y - 23
        );
      }
    }

    if (this.containerPipe4.angle == 0) {
      cuatroTrayecto = true;
    } else {
      cuatroTrayecto = false;
    }
    if (
      !cuatroTrayecto &&
      !quintoTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (
        this.containerPipe4.angle == -90 ||
        this.containerPipe4.angle == -180
      ) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe4.x - 21,
          this.containerPipe4.y
        );
      }
    }
    if (
      !cuatroTrayecto &&
      quintoTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe4.angle == 90) {
        this.waterSplash.setRotation(0);
        this.waterSplash.setPosition(
          this.containerPipe4.x,
          this.containerPipe4.y - 61
        );
      }
      if (this.containerPipe4.angle == -90) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe4.x + 63,
          this.containerPipe4.y
        );
      }
    }
    if (this.containerPipe5.angle == 90) {
      quintoTrayecto = true;
    } else {
      quintoTrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe5.angle == 0 || this.containerPipe5.angle == -180) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe5.x + 61,
          this.containerPipe5.y
        );
      }
      if (this.containerPipe5.angle == -90) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe5.x - 25,
          this.containerPipe5.y
        );
      }
    }
    if (this.containerPipe6.angle == 90) {
      sextotrayecto = true;
    } else {
      sextotrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe6.angle == 0 || this.containerPipe6.angle == -180) {
        this.waterSplash.setRotation(3.15);
        this.waterSplash.setPosition(
          this.containerPipe6.x,
          this.containerPipe6.y - 29
        );
      }
    }
    if (this.containerPipe7.angle == 180 || this.containerPipe7.angle == -180) {
      septimotrayecto = true;
    } else {
      septimotrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe7.angle == 90) {
        this.waterSplash.setRotation(4.68);
        this.waterSplash.setPosition(
          this.containerPipe7.x - 61,
          this.containerPipe7.y
        );
      }
    }
    if (this.containerPipe8.angle == 90) {
      octavotrayecto = true;
    } else {
      octavotrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe8.angle == 0) {
        this.waterSplash.setRotation(3.15);
        this.waterSplash.setPosition(
          this.containerPipe8.x,
          this.containerPipe8.y + 61
        );
      }
    }
    if (this.containerPipe9.angle == -90) {
      novenotrayecto = true;
    } else {
      novenotrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe9.angle == 0 || this.containerPipe9.angle == 90) {
        this.waterSplash.setRotation(4.68);
        this.waterSplash.setPosition(
          this.containerPipe9.x - 61,
          this.containerPipe9.y
        );
      }
    }
    if (this.containerPipe10.angle == -90) {
      decimotrayecto = true;
    } else {
      decimotrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe10.angle == 0) {
        this.waterSplash.setRotation(4.68);
        this.waterSplash.setPosition(
          this.containerPipe10.x - 61,
          this.containerPipe10.y
        );
      }
    }
    if (this.containerPipe11.angle == 0) {
      onceavotrayecto = true;
    } else {
      onceavotrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe11.angle == -90) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe11.x - 25,
          this.containerPipe11.y
        );
      }
    }
    if (this.containerPipe12.angle == 90) {
      doceavotrayecto = true;
    } else {
      doceavotrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !doceavotrayecto &&
      onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe12.angle == 0) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe12.x + 61,
          this.containerPipe12.y
        );
      }
      if (this.containerPipe12.angle == -90) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe12.x - 25,
          this.containerPipe12.y
        );
      }
    }
    if (this.containerPipe13.angle == 90) {
      trecetrayecto = true;
    } else {
      trecetrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !trecetrayecto &&
      doceavotrayecto &&
      onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (
        this.containerPipe13.angle == 0 ||
        this.containerPipe13.angle == -180
      ) {
        this.waterSplash.setRotation(3.15);
        this.waterSplash.setPosition(
          this.containerPipe13.x,
          this.containerPipe13.y - 27
        );
      }
    }
    if (this.containerPipe14.angle == 90) {
      catorcetrayecto = true;
    } else {
      catorcetrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !catorcetrayecto &&
      trecetrayecto &&
      doceavotrayecto &&
      onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (
        this.containerPipe14.angle == 0 ||
        this.containerPipe14.angle == -180
      ) {
        this.waterSplash.setRotation(3.15);
        this.waterSplash.setPosition(
          this.containerPipe14.x,
          this.containerPipe14.y - 27
        );
      }
    }
    if (
      this.containerPipe15.angle == 180 ||
      this.containerPipe15.angle == -180
    ) {
      quincetrayecto = true;
    } else {
      quincetrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !quincetrayecto &&
      catorcetrayecto &&
      trecetrayecto &&
      doceavotrayecto &&
      onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (
        this.containerPipe15.angle == 90 ||
        this.containerPipe15.angle == -90 ||
        this.containerPipe15.angle == 0
      ) {
        this.waterSplash.setRotation(3.15);
        this.waterSplash.setPosition(
          this.containerPipe15.x,
          this.containerPipe15.y + 61
        );
      }
    }
    if (this.containerPipe16.angle == -90) {
      diezSeistrayecto = true;
    } else {
      diezSeistrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !diezSeistrayecto &&
      quincetrayecto &&
      catorcetrayecto &&
      trecetrayecto &&
      doceavotrayecto &&
      onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe16.angle == -180) {
        this.waterSplash.setRotation(0);
        this.waterSplash.setPosition(
          this.containerPipe16.x,
          this.containerPipe16.y - 61
        );
      }
    }
    if (
      this.containerPipe17.angle == 180 ||
      this.containerPipe17.angle == -180
    ) {
      diezSietetrayecto = true;
    } else {
      diezSietetrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !diezSietetrayecto &&
      diezSeistrayecto &&
      quincetrayecto &&
      catorcetrayecto &&
      trecetrayecto &&
      doceavotrayecto &&
      onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe17.angle == 90) {
        this.waterSplash.setRotation(4.68);
        this.waterSplash.setPosition(
          this.containerPipe17.x - 63,
          this.containerPipe17.y
        );
      }
    }
    if (this.containerPipe18.angle == 0) {
      diezOchotrayecto = true;
    } else {
      diezOchotrayecto = false;
    }

    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !diezOchotrayecto &&
      diezSietetrayecto &&
      diezSeistrayecto &&
      quincetrayecto &&
      catorcetrayecto &&
      trecetrayecto &&
      doceavotrayecto &&
      onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (this.containerPipe18.angle == 90) {
        this.waterSplash.setRotation(0);
        this.waterSplash.setPosition(
          this.containerPipe18.x,
          this.containerPipe18.y - 63
        );
      }
      if (this.containerPipe18.angle == -90) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe18.x - 21,
          this.containerPipe18.y
        );
      }
    }
    if (this.containerPipe19.angle == 180 || this.containerPipe19.angle == 0) {
      diezNuevetrayecto = true;
    } else {
      diezNuevetrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !diezNuevetrayecto &&
      diezOchotrayecto &&
      diezSietetrayecto &&
      diezSeistrayecto &&
      quincetrayecto &&
      catorcetrayecto &&
      trecetrayecto &&
      doceavotrayecto &&
      onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (
        this.containerPipe19.angle == 90 ||
        this.containerPipe19.angle == -90
      ) {
        this.waterSplash.setRotation(1.57);
        this.waterSplash.setPosition(
          this.containerPipe19.x - 18,
          this.containerPipe19.y
        );
      }
    }
    if (
      this.containerPipe20.angle == 180 ||
      this.containerPipe20.angle == -180
    ) {
      veintetrayecto = true;
    } else {
      veintetrayecto = false;
    }
    if (
      //1.57 "derecha" , 0 "arriba", 3.15 "abajo", 4.68 "Izquierda"
      !veintetrayecto &&
      diezNuevetrayecto &&
      diezOchotrayecto &&
      diezSietetrayecto &&
      diezSeistrayecto &&
      quincetrayecto &&
      catorcetrayecto &&
      trecetrayecto &&
      doceavotrayecto &&
      onceavotrayecto &&
      decimotrayecto &&
      novenotrayecto &&
      octavotrayecto &&
      septimotrayecto &&
      sextotrayecto &&
      quintoTrayecto &&
      cuatroTrayecto &&
      primerTrayecto &&
      segundoTrayecto &&
      tercerTrayecto
    ) {
      if (
        this.containerPipe20.angle == 90 ||
        this.containerPipe20.angle == -90 ||
        this.containerPipe20.angle == 0
      ) {
        this.waterSplash.setRotation(3.15);
        this.waterSplash.setPosition(
          this.containerPipe20.x,
          this.containerPipe20.y + 62
        );
      }
    }
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
      LlegoTrayectoFinal = true;
    }
    if (LlegoTrayectoFinal) {
      this.water.setVisible(true);
      this.grifo.anims.play("open");
      LlegoTrayectoFinal = false;
    }
  }
  //////////////////////////////////////////////////// UPDATE //////////////////////////////////////////////////
  update(time, deltaTime) {
    ///////////////////////CONDICION/////////////////////////
  }

  //////////////////////////////////////////////// OTHER FUNCTION ////////////////////////////////////////////
  //////////////////// GAME OVER /////////////////
  gameOver() {
    // Cambiar a la escena de Gameover y pasar la puntuación
    this.scene.start("GameOver", {
      VicLoose: VicLoose,
    });
    //backgroundMusic.stop();
    musicaActivada = false;
    VicLoose = 0;
  }
}
