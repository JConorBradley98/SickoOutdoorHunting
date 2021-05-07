/// <reference path="C:/Users/jburn/Desktop/Sicko-Projects/sickooutdoorhunting/typings/phaser.d.ts"/>
import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
    
    
  }

  init(data) {}

  preload() {
    this.load.image('background', 'assets/loadingscreen.png');
    this.load.image('Title', 'assets/Title.png');
  }

  create(data) {
    this.add.image(400, 300, 'background');
  }

  update(time, delta) {}
}

export default Game;