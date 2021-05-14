import Phaser from 'phaser';
import TitleScreen from './scenes/TitleScreen';
import Controls from './scenes/Controls';
import Game from './scenes/Game';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [TitleScreen, Controls, Game],
};

var game = new Phaser.Game(config);