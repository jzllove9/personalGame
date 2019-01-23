import BasePlayer from './basePlayer'
import cGraphics from '../base/customGraphics'

export default class MainPlayer extends BasePlayer {
    constructor(scene, options) {
        super(scene, options);
    }

    /**
     * overwrite the initPlayer function in basePlayer Class
     */
    initPlayer(scene, options) {
        let _lineStyle = options.lineStyle ? options.lineStyle : {};
        let _fillStyle = options.fillStyle ? options.fillStyle : {};

        let _tempGraph = new cGraphics(scene, options)
        _tempGraph.lineStyle(_lineStyle.tickness || 5, _lineStyle.color || 0x0000FF, _lineStyle.opacity || 0.5);
        _tempGraph.fillStyle(_fillStyle.color || 0xff0000, _fillStyle.opacity || 0.5);
        _tempGraph.fillRect(0, 0, options.width || 40, options.height || 50);
        _tempGraph.strokeRect(0, 0, options.width || 40, options.height || 50);

        return _tempGraph;
    }
}