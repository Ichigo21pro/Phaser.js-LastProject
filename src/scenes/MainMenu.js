import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    ///////////////// LOGO //////////////////
    this.add
      .image(0, 0, "yellowBack")
      .setOrigin(0, 0)
      .setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    var gameLogo = this.add.image(512, -100, "gameLogo");
    // Crear el tween
    this.tweens.add({
      targets: gameLogo, // El objeto que se va a animar
      y: 220, // La posición final en el eje Y
      ease: "Power1", // El tipo de easing
      duration: 1000, // La duración de la animación en milisegundos
      delay: 500, // Retraso antes de que comience la animación (opcional)
    });
    //////////////////// MUSIC /////////////////////

    // Reproducir la música de fondo
    let music = this.sound.add("backgroundMusicIntro", {
      loop: true, // Hacer que la música se repita
      volume: 0.1, // Ajustar el volumen si es necesario
    });
    music.play();
    // Reproducir la música de fondo
    let musicButoon = this.sound.add("buttonSound", {
      loop: false, // Hacer que la música se repita
      volume: 0.3, // Ajustar el volumen si es necesario
    });
    ///////////////// CAMIONES //////////////////

    var camion1 = this.add.image(1500, 450, "camion");
    camion1.setScale(1.2);
    //Crear el tween
    this.tweens.add({
      targets: camion1, // El objeto que se va a animar
      x: 900, // La posición final en el eje Y
      ease: "Power1", // El tipo de easing
      duration: 1000, // La duración de la animación en milisegundos
      delay: 500, // Retraso antes de que comience la animación (opcional)
    });
    var camion2 = this.add.image(-200, 450, "camion");
    // Invertir la imagen en el eje X y aumentar el tamaño en 1.2
    camion2.setScale(-1.2, 1.2);
    //Crear el tween
    this.tweens.add({
      targets: camion2, // El objeto que se va a animar
      x: 150, // La posición final en el eje Y
      ease: "Power1", // El tipo de easing
      duration: 1000, // La duración de la animación en milisegundos
      delay: 500, // Retraso antes de que comience la animación (opcional)
    });

    ///////////////// BOTONES //////////////////
    var tryButtom = this.add.image(530, 420, "tryButtom");
    tryButtom.setScale(0.15);
    // Habilitar la interactividad en el botón tryButtom
    tryButtom.setInteractive();
    // Escalar hacia arriba con una animación

    var repeatAnimation = this.tweens.add({
      targets: tryButtom,
      scaleX: 0.18,
      scaleY: 0.18,
      duration: 500,
      ease: "Linear",
      yoyo: true,
      repeat: -1,
    });

    // Agregar evento de clic para tryButtom
    tryButtom.on(
      "pointerdown",
      function () {
        musicButoon.play();

        repeatAnimation.stop();
        // Escalar hacia arriba con una animación
        this.tweens.add({
          targets: tryButtom,
          scaleX: 0.2,
          scaleY: 0.2,
          duration: 150,
          ease: "Linear",
          yoyo: true, // Hacer que el botón vuelva a su escala original después de agrandarse
        });
        this.time.delayedCall(1500, () => {
          music.stop();
          this.scene.start("Game");
        });
      },
      this
    );
    var playbuttom = this.add.image(530, 550, "botonPLAY");
    playbuttom.setScale(0.15);
    // Habilitar la interactividad en el botón playbuttom
    playbuttom.setInteractive();

    // Agregar evento de clic para playbuttom
    playbuttom.on(
      "pointerdown",
      function () {
        musicButoon.play();
        // Escalar hacia arriba con una animación
        this.tweens.add({
          targets: playbuttom,
          scaleX: 0.2,
          scaleY: 0.2,
          duration: 150,
          ease: "Linear",
          yoyo: true, // Hacer que el botón vuelva a su escala original después de agrandarse
        });
        // Redirigir a la URL deseada
        this.time.delayedCall(1500, () => {
          window.location.href = "https://www.desatascosjumbo.com/";
        });
      },
      this
    );
  }
}
