/**
 * 主场景管理类
 */

import ObjUtils from '../utils/objUtils'

import Phaser from 'phaser'
import BaseScene from './baseScene'
import MainPlayer from "../roles/mainPlayer";
import RoleList from "../roles/rolesList";
import MainCtrl from "../controller/mainPlayerCtrl";
import Connect from "../connect/connect";
import MyEventEmitter from '../events/eventEmitter'

export default class mainSceneManager {
    constructor(opts) {
        if (!opts) opts = {};

        const mainPlayerPos = {x: 250, y: 250};
        this._ctrl = null;

        let baseScene = new BaseScene({
            onPreload: () => {
                console.log('outside preload')

                baseScene.load.image('soldier', require('../../assets/images/soldier/soldier.png'))

                baseScene.textures.addBase64('sword', require('../../assets/images/soldier/sword.png'))
                baseScene.textures.addBase64('swordStrom', require('../../assets/images/soldier/swordStrom.png'))
            },

            onCreate: () => {
                console.log('outside created')

                let _mp = new MainPlayer(baseScene, {
                    initPos: mainPlayerPos,
                    roleName: RoleList.Soldier,
                })

                this._ctrl = new MainCtrl(baseScene, _mp)

                this._cc = new Connect();
            },

            onUpdate: () => {
                this._ctrl.update();
            }
        })

        let _gameConfig = {
            scene: baseScene,
            type: Phaser.AUTO,
            physics: {
                default: 'arcade',
                arcade: {
                    debug: false
                }
            }
        }

        _gameConfig = ObjUtils.mergeObj(_gameConfig, opts)

        this.gameScene = new Phaser.Game(_gameConfig)

        window._myEmitter = new MyEventEmitter();
    }

    /**
     * resize 方法，重置场景element大小
     * @param width
     * @param height
     */
    resize(width, height) {
        this.gameScene.resize(width, height)
    }

    destory(){
        this._cc.destory();
    }
}