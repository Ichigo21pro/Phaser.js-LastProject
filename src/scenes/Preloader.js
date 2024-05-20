import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on("progress", (progress) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + 460 * progress;
    });
    // Custom Webfonts
    this.fonts = ["Madimi One"];
    // Workaround for Phaser 3 not loading fonts until used
    this.fonts.forEach((font) => {
      this.add.text(0, 0, "", { fontFamily: font });
    });
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath("assets");

    //this.load.image('logo', 'logo.png');

    this.load.image("yellowBack", "yellowBackgroung.png");
    this.load.image("tryButtom", "tryButtom.png");
    this.load.image("camion", "furgonJumbo.png");
    this.load.image("sky", "sky.png");
    this.load.image("gameLogo", "LogoGame.png");
    this.load.image("gameBackGround", "BackGroundGame.png");
    this.load.image("bañera", "bañera.png");
    this.load.image("pipe_recto", "pipe/recto.png");
    this.load.image("pipe_inicio", "pipe/12.png");
    this.load.image("pipe_curvo", "pipe/14.png");
    this.load.image("pipe_3", "pipe/6.png");
    this.load.image("boton", "buttom.png");
    this.load.image("botonPLAY", "buttomPlayNow.png");
    this.load.image("handPointer", "handPointer.png");
    this.load.image("CTAPhoto", "CTAPhoto.png");

    this.load.spritesheet("water", "Water.png", {
      frameWidth: 152,
      frameHeight: 304,
    });
    this.load.spritesheet("waterSplash", "splash.png", {
      frameWidth: 62,
      frameHeight: 33,
    });

    this.load.spritesheet("grifo", "grifo.png", {
      frameWidth: 619,
      frameHeight: 598,
    });

    this.load.audio("backgroundMusicIntro", "IntroMusic.mp3"); // Cargar la música
    this.load.audio("buttonSound", "buttonSoundUI.mp3");
    this.load.audio("BackGroundMusicGame", "gameMusic.mp3");
    // this.load.spritesheet('explocion', 'explosion_scaled_down.png', { frameWidth: 36, frameHeight: 36 });
    // this.load.spritesheet('explocion2', 'secondBomb.png', { frameWidth: 80, frameHeight: 80 });
    // this.load.atlas('atlas', 'atlas.png', 'atlas.json');
    //music
    /*this.load.audio('botton', 'botton.mp3');
    this.load.audio('damage', 'damage.mp3');
    this.load.audio('explosion', 'explosion.mp3');
    this.load.audio('largeExplosion', 'largeExplosion.mp3');
    this.load.audio('jump', 'jump.mp3');
    
    this.load.audio('start', 'start.mp3');*/
    // this.load.audioSprite('audiosprite', 'audiosprite.json', ['audiosprite.mp3']);
    // this.load.audio('backmusic', 'BackMusic.mp3');
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.scene.start("MainMenu");
  }
}
