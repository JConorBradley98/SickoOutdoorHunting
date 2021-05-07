/// <reference path="C:/Users/jburn/Desktop/Sicko-Projects/sickooutdoorhunting/typings/phaser.d.ts"/>
import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';

/// Making Copy of Config Object and then Assigns new a property called a scene
new Phaser.Game(Object.assign(config, {
  scene: [GameScene],
}));
