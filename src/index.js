import Phaser from 'phaser';

import './css/main.css';
import { BootScene, PreloadScene, MenuScene, MainScene } from './scenes';

new Phaser.Game({
    type: Phaser.AUTO,
    scene: [BootScene, PreloadScene, MenuScene, MainScene],
});
