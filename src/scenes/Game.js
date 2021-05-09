/// <reference path="C:/Users/jburn/Desktop/Sicko-Projects/sickooutdoorhunting/typings/phaser.d.ts"/>
import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    
    
  }

  init(data) {}
  

  //loading Assets 
  preload() {

    this.load.multiatlas('demomode', 'assets/spritesheet/demomodejsonanim.json', 'assets');

    this.load.image('background', 'assets/loadingscreen.png');

    this.load.image('title', 'assets/title2.png');

    this.load.image('insertmoney', 'assets/insertmoney.png');

    this.load.image('moneyin',  'assets/moneyin.png')

    this.load.audio("title_music", "assets/music.mp3");

  }


  /// Creating Menu Splash Screen
  create(data) {
   
    // Create Images 
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.52, "title").setDepth(1);
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.95, "moneyin").setDepth(1);
    this.add.image(0,0, "background").setDisplayOrigin(0).setDepth(0);
 
    //play Button
    let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 1.20, "insertmoney").setDepth(1);

    
  
    ///Create audio disable pause on blur
    this.sound.pauseOnBlur = false;
    this.sound.play("title_music", {
      loop:true
    });

    //create animation
    
    var demomode = this.add.sprite(0, 0, 'demomode', 'assets/spritesheet/demomodejsonanim.json');
    
    this.anims.create({
      key: 'demomode',
      frameRate: 1,
      frames: this.anims.generateFrameNumbers('demomode', { start: 1, end: 2,}),
      repeat: -1,
      
      

      
    });
    
    function createscene(){

      //Animation Definitions here
      
    }

    //Title Animation Experiment

   



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