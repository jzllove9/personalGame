/**
 * 战士类
 */
import Roles from './roles'

export default class Soldier extends Roles {
    constructor(scene, opts) {
        super();

        this._scene = scene;

        this._opts = opts;

        this._sprite = this.initSprite(this._scene, this._opts);
    }

    /**
     * overwrite
     */
    initSprite(scene, opts) {
        let _tempGraph = scene.make.sprite({
            key: 'logo',
            x: opts.initPos.x,
            y: opts.initPos.y,
            alpha: { randFloat: [ 1, 1 ] },

        })
        _tempGraph.scaleX = 0.5;
        _tempGraph.scaleY = 0.5;

        return _tempGraph;
    }

    /**
     * overwrite
     */
    clear() {
        this._sprite.clear();
    }

    /**
     * overwrite
     */
    destory() {
        this._sprite.destory();
        this._sprite = null;
    }
}