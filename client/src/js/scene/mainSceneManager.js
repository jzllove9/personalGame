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

export default class mainSceneManager {
    constructor(opts) {
        if (!opts) opts = {};

        const mainPlayerPos = {x: 150, y: 150};
        this._ctrl = null;

        let baseScene = new BaseScene({
            onPreload: () => {
                console.log('outside preload')

                baseScene.load.image('logo', require('../../assets/logo.png'))
            },

            onCreate: () => {
                console.log('outside created')

                let that = this;

                let _mp = new MainPlayer(baseScene, {
                    initPos: mainPlayerPos,
                    roleName: RoleList.Soldier,
                })

                this._ctrl = new MainCtrl(baseScene, _mp)

                let _cc = new Connect();
            },

            onUpdate: () => {
                this._ctrl.update();
            }
        })

        let _gameConfig = {
            scene: baseScene,
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