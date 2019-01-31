import BasePlayer from './basePlayer'
import RolesList from './rolesList'

import Soldier from './soldier'

//共CD
const PUBLIC_CD_TIME = 1.5;

export default class MainPlayer extends BasePlayer {
    constructor(scene, options) {
        super(scene, options);

        this.inPublicCD = false;
    }

    /**
     * overwrite the initPlayer function in basePlayer Class
     */
    initPlayer(scene, options) {
        switch (options.roleName) {
            case RolesList.Soldier:
                this._role = new Soldier(scene, options);
                break;
            default:
                break;
        }

        window._myEmitter.on('ATTACK_ACTION', () => {
            if (this.checkPublicCD()) {
                this._role.attack();
            }
        })

        window._myEmitter.on('Q_SKILL_ACTION', ()=>{
            if (this.checkPublicCD()) {
                this._role.startSkill('Q')
            }
        })
    }

    /**
     * 检查是否处于 公CD状态
     * @returns {boolean}
     */
    checkPublicCD() {
        if (this.inPublicCD) return false;

        this.inPublicCD = true;
        setTimeout(() => {
            this.inPublicCD = false
        }, PUBLIC_CD_TIME * 1000)

        return true;
    }
}