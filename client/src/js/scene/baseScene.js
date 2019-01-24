import Phaser from 'phaser'

import RoleList from '../roles/rolesList'
import MainPlayer from '../roles/mainPlayer'
import MainCtrl from '../controller/mainPlayerCtrl'


export default class BaseScene extends Phaser.Scene {
    graphics = null;


    constructor() {
        super();
        this.mainPlayerPos = {x: 100, y: 100};
        this._ctrl = null;
    }


    preload() {
        console.log('scene preload')
    }

    create() {
        let that = this;

        let _mp = new MainPlayer(this, {
            initPos: this.mainPlayerPos,
            roleName: RoleList.Soldier,
        })

        this._ctrl = new MainCtrl(this, _mp)

    }

    update() {
        this._ctrl.update();
    }
}