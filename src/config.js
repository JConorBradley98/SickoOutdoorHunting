/// <reference path="C:/Users/jburn/Desktop/Sicko-Projects/sickooutdoorhunting/typings/phaser.d.ts"/>
import Phaser from 'phaser';

export default {

  //styling

  type: Phaser.AUTO, // Sets what type of camera to use automatically sets the camera to webGL if supported by browser
  parent: 'game',
  backgroundColour: 0x000000,  /// Manipulates background 
  
  /// Scale used to manipulate canvas size
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  }
};
