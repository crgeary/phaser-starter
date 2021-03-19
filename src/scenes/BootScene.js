import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
    constructor() {
        super('boot');
    }
    preload() {
        // ...
    }
    create() {
        this.scene.start('preload');
    }
}

export { BootScene };
