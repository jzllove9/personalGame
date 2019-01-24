/**
 * 战士类
 */

import ObjUtils from '../utils/objUtils'

import Roles from './roles'
import cGraphics from '../base/customGraphics'

export default class Soldier extends Roles {
    constructor(scene, opts) {
        super();

        this._scene = scene;

        //自定义职业样式
        let customStyle = {
            lineStyle: {
                tickness: 2,
                color: 0xFFFF00,
                opacity: 0.6
            },
            fillStyle: {
                color: 0xbb4c03,
                opacity: 1
            }
        }

        this.options = ObjUtils.mergeObj(this.options, customStyle)

        this._graph = this.initGraphics(this._scene, opts);
    }

    /**
     * overwrite
     */
    initGraphics(scene, opts) {
        let _lineStyle = this.options.lineStyle;
        let _fillStyle = this.options.fillStyle;

        let _tempGraph = new cGraphics(scene, {
            x: opts.initPos.x,
            y: opts.initPos.y
        })

        _tempGraph.lineStyle(_lineStyle.tickness || 5, _lineStyle.color || 0x0000FF, _lineStyle.opacity || 0.5);
        _tempGraph.fillStyle(_fillStyle.color || 0xff0000, _fillStyle.opacity || 0.5);
        _tempGraph.fillCircle(0, 0, this.options.radius || 40);
        _tempGraph.strokeCircle(0, 0, this.options.radius || 40);

        return _tempGraph;
    }

    /**
     * overwrite
     */
    clear() {
        this._graph.clear();
    }

    /**
     * overwrite
     */
    destory() {
        this._graph.destory();
        this._graph = null;
    }
}