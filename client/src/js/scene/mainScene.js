import ObjUtils from '../utils/objUtils'

import Phaser from 'phaser'
import BaseScene from './baseScene'

export default class mainScene {
    constructor(opts) {
        if (!opts) opts = {};

        let _gameConfig = {
            scene: BaseScene,
        }

        _gameConfig = ObjUtils.mergeObj(_gameConfig, opts)

        this.gameScene = new Phaser.Game(_gameConfig)
    }

    /**
     * resize 方法，重置场景element大小
     * @param width
     * @param height
     */
    resize(width, height) {
        this.gameScene.resize(width, height)
    }
}