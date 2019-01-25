/**
 * 基础场景类，提供场景Hook
 */

import Phaser from 'phaser'

export default class BaseScene extends Phaser.Scene {
    constructor(options) {
        super();
        this._options = options
    }

    preload() {
        this._options.onPreload && this._options.onPreload()
    }

    create() {
        this._options.onCreate && this._options.onCreate();
    }

    update() {
        this._options.onUpdate && this._options.onUpdate();
    }
}