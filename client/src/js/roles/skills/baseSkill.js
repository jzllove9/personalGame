/**
 * 技能基类
 */

export default class BaseSkill {
    constructor(scene) {
        this._scene = scene;

        this._sprite = null;
        this._target = null;
        this._damage = 0;
        this._slowEffectNum = 1;//减速效果
        this._slowEffectTime = 1.5;//减速时间
        this._singTime = 1.5;//施法时间
        this._coolDown = true;
        this._coolDownTime = 0;

        this.initSkill(this._scene);
    }

    /**
     * 初始化技能
     */
    initSkill(scene){

    }

    /**
     * 技能开始
     */
    start() {

    }

    /**
     * 技能结束
     */
    end() {

    }

    /**
     * 销毁
     */
    destory() {

    }
}