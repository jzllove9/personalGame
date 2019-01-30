/**
 * 全局控制类
 */
import Phaser from 'phaser'

const MOVE_SPEED = 0.1;

export default class MainPlayerCtrl {
    constructor(scene, target) {
        this._scene = scene;
        this._attackBtn = null;

        this._currentTarget = target;
        this._target = target.getGraph();
        this._oldPos = {
            x: this._target.x,
            y: this._target.y
        };
        this._newPos = {};

        //smooth move variables
        this._deltaTime = 0;
        this._oldTime = Date.now();
        this._nowTime = Date.now();

        this._cursorCtrl = this.initCursorCtrl();
    }

    initCursorCtrl() {
        let tempCtrl = this._scene.input.keyboard.createCursorKeys();

        this._attackBtn = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)

        return tempCtrl;
    }

    update() {
        if (!this._target) return;

        this._nowTime = Date.now();

        this._deltaTime = this._nowTime - this._oldTime

        // this._target.setVelocity(0);

        if (this._cursorCtrl.left.isDown) {
            // this._target.setVelocityX(-MOVE_SPEED);
            this._target.x -= MOVE_SPEED * this._deltaTime
        }
        else if (this._cursorCtrl.right.isDown) {
            // this._target.setVelocityX(MOVE_SPEED);
            this._target.x += MOVE_SPEED * this._deltaTime
        }

        if (this._cursorCtrl.up.isDown) {
            // this._target.setVelocityY(-MOVE_SPEED);
            this._target.y -= MOVE_SPEED * this._deltaTime
        }
        else if (this._cursorCtrl.down.isDown) {
            // this._target.setVelocityY(MOVE_SPEED);
            this._target.y += MOVE_SPEED * this._deltaTime
        }

        this._oldTime = this._nowTime;

        //face to
        let _angle = 0;
        this._newPos = {
            x: this._target.x,
            y: this._target.y
        }

        let deltaX = this._newPos.x - this._oldPos.x;
        let deltaY = this._newPos.y - this._oldPos.y;

        if (deltaX || deltaY) {
            _angle = Math.atan2(-deltaX, -deltaY);

            this._target.angle = -_angle * 180 / Math.PI;

            this._oldPos = this._newPos;
        }

        //attack
        if(this._attackBtn.isDown){
            this._currentTarget._role.attack();
        }
    }
}