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
    // Reproducir la música de fondo
    let musicButoon = this.sound.add("buttonSound", {
      loop: false, // Hacer que la música se repita
      volume: 0.3, // Ajustar el volumen si es necesario
    });

    //camiones
    var camion = this.add.image(0, 0, "camion");
    camion.setScale(2.3);
    //boton
    var playbuttom = this.add.image(190, 0, "botonPLAY");
    playbuttom.setScale(0.11);
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
        this.animacionIrse();
        this.time.delayedCall(4000, () => {
          window.location.href = "https://www.desatascosjumbo.com/";
        });
      },
      this
    );
    //UI IFORMATIVO

    //container

    this.container = this.add.container(1500, 400);
    this.container.add(camion); // Agregar primero el camión
    this.container.add(playbuttom); // Agregar después el botón para que quede delante del camión
    camion.setDepth(0);
    playbuttom.setDepth(1);

    var gameLogo = this.add.image(512, 380, "gameLogo");

    // Crear el tween
    this.tweens.add({
      targets: gameLogo, // El objeto que se va a animar
      y: -100, // La posición final en el eje Y
      ease: "Power1", // El tipo de easing
      duration: 700, // La duración de la animación en milisegundos
      delay: 500, // Retraso antes de que comience la animación (opcional)
      onComplete: () => {
        this.animacionEntrar();
      },
    });
  }
  animacionIrse() {
    this.tweens.add({
      targets: this.container, // El objeto que se va a animar
      x: -800, // La posición final en el eje Y
      ease: "Power1", // El tipo de easing
      duration: 800, // La duración de la animación en milisegundos
      delay: 300, // Retraso antes de que comience la animación (opcional)
    });
  }
  animacionEntrar() {
    this.tweens.add({
      targets: this.container, // El objeto que se va a animar
      x: 400, // La posición final en el eje Y
      ease: "Power1", // El tipo de easing
      duration: 800, // La duración de la animación en milisegundos
      delay: 300, // Retraso antes de que comience la animación (opcional)
    });
  }
}
