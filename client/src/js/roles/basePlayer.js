import cGraphics from '../base/customGraphics'

export default class BasePlayer {

    constructor(scene, options) {
        this._className = 'BasePlayer'
        this._graph = null;
        this._graph = this.initPlayer(scene, options);
    }

    /**
     * 初始化player
     * @param scene
     * @param options
     */
    initPlayer(scene, options) {
        console.log('base player class was initializationed, please overwrite it by self')

        let _lineStyle = options.lineStyle ? options.lineStyle : {};
        let _fillStyle = options.fillStyle ? options.fillStyle : {};

        let _tempGraph = new cGraphics(scene, options)
        _tempGraph.lineStyle(_lineStyle.tickness || 5, _lineStyle.color || 0x0000FF, _lineStyle.opacity || 0.5);
        _tempGraph.fillStyle(_fillStyle.color || 0xff0000, _fillStyle.opacity || 0.5);
        _tempGraph.fillCircle(0, 0, options.radius || 40);
        _tempGraph.strokeCircle(0, 0, options.radius || 40);

        return _tempGraph;
    }

    /**
     * clear player graphcis
     */
    clearPlayer() {
        this._graph.clear();
    }

    /**
     * destory player graphcis
     */
    destoryPlayer() {
        this._graph.destory();
        this._graph = null;
    }
}