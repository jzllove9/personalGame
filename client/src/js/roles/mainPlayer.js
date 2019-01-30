import BasePlayer from './basePlayer'
import RolesList from './rolesList'

import Soldier from './soldier'

export default class MainPlayer extends BasePlayer {
    constructor(scene, options) {
        super(scene, options);
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
    }
}