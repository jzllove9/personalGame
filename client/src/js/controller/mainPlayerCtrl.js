/**
 * 全局控制类
 */

const MOVE_SPEED = 0.2;

export default class MainPlayerCtrl {
    constructor(scene, target) {
        this._scene = scene;
        this._target = target.getGraph();
        this._cursorCtrl = this.initCursorCtrl();

        //smooth move variables
        this._delta = 0;
        this._oldTime = Date.now();
        this._nowTime = Date.now();
    }

    initCursorCtrl() {
        let tempCtrl = this._scene.input.keyboard.createCursorKeys();
        return tempCtrl;
    }

    update() {
        if (!this._target) return;

        this._nowTime = Date.now();

        this._delta = this._nowTime - this._oldTime

        if (this._cursorCtrl.left.isDown) {
            this._target.x -= MOVE_SPEED * this._delta

        }
        else if (this._cursorCtrl.right.isDown) {
            this._target.x += MOVE_SPEED * this._delta
        }

        if (this._cursorCtrl.up.isDown) {
            this._target.y -= MOVE_SPEED * this._delta
        }
        else if (this._cursorCtrl.down.isDown) {
            this._target.y += MOVE_SPEED * this._delta
        }

        this._oldTime = this._nowTime;
    }
}