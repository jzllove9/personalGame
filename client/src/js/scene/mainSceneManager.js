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

        const mainPlayerPos = {x: 100, y: 100};
        this._ctrl = null;

        //TODO: 对外提供场景回调Hook 请注意this指针问题
        let baseScene = new BaseScene({
            onPreload: () => {
                console.log('outside preload')

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