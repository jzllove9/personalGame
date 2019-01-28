export default class BasePlayer {

    constructor(scene, options) {
        this._role = null;

        this.initPlayer(scene, options);
    }

    /**
     * 初始化player的角色graphics(必须重写)
     * @param scene
     * @param options
     */
    initPlayer(scene, options) {
        console.log('base player class was initializationed, please extends and overwrite it')
    }

    /**
     * 获取player的角色graphics元素
     * @returns {*|null}
     */
    getGraph(){
        return this._role._sprite;
    }

    /**
     * 清空player的角色graphics
     */
    clearPlayer() {
        this._role.clear();
    }

    /**
     * 销毁player的角色graphics
     */
    destoryPlayer() {
        this._role.destory();
        this._role = null;
    }
}