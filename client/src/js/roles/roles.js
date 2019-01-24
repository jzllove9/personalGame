/**
 * 职业基类
 */

export default class Roles {
    constructor() {
        this.options = {
            radius: 15,

            lineStyle: {
                tickness: 2,
                color: 0xededed,
                opacity: 0.6
            },
            fillStyle: {
                color: 0xededed,
                opacity: 1
            }
        }

        this._graph = null;
    }

    /**
     * 初始化 role graphics
     */
    initGraphics() {
        console.log('base roles class was initializationed, please extends and overwrite it')
    }

    /**
     * 清空 role graphics
     */
    clear() {

    }

    /**
     * 摧毁 role graphics
     */
    destory() {

    }
}