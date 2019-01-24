import Phaser from 'phaser';

export default class CustomGraphics extends Phaser.GameObjects.Graphics {

    constructor(scene, options) {
        super(scene, options);

        scene.add.existing(this);
    }
}