/// <reference path="C:/Users/jburn/Desktop/Sicko-Projects/sickooutdoorhunting/typings/phaser.d.ts"/>
import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    
    
  }

  init(data) {}


  //loading Assets (Images)
  preload() {
    this.load.image('background', 'assets/loadingscreen.png');

    this.load.image('title', 'assets/title2.png');

    this.load.image('insertmoney', 'assets/insertmoney.png');

    this.load.image('moneyin',  'assets/moneyin.png')

    this.load.image('demomode', 'assets/demomode.png');

    this.load.audio("title_music", "assets/music.mp3");

    this.load.spritesheet("title", 'assets/title2.png',{

    frameHeight: 1,
    frameWidth: 1,

    });
  }


  /// Creating Menu Splash Screen
  create(data) {
   
    // Create Images 
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.52, "title").setDepth(1);

    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.95, "moneyin").setDepth(1);

    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.12, "demomode").setDepth(1);

    this.add.image(0,0, "background").setDisplayOrigin(0).setDepth(0);

    let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 1.20, "insertmoney").setDepth(1);

    ///create sprites

    ///Create audio disable pause on blur
    this.sound.pauseOnBlur = false;
    this.sound.play("title_music", {
      loop:true
    });

    //create animation



    //make image buttons interacrive

    /*   
        PointerEvents:
          pointerover - hovering
          pointerput - not hovering
          pointerup - click and release
          pointerdown - just click

    */

    playButton.setInteractive();
    
  }
    

  update(time, delta) {}
}

export default Game;