import Phaser from 'phaser';

import { ZOOM, scaleUnit } from './utils/dpr';
import { BootScene, PreloadScene, MenuScene, MainScene } from './scenes';

import './css/main.css';

new Phaser.Game({
    type: Phaser.AUTO,
    scene: [BootScene, PreloadScene, MenuScene, MainScene],
    width: scaleUnit(500),
    height: scaleUnit(500),
    zoom: ZOOM,
});
