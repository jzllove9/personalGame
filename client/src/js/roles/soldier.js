/**
 * 战士类
 */
import Roles from './roles'
import SwordStrom from './skills/soldier/swordStorm'

const CONTAINER_SIZE = {w: 50, h: 50}
const SKILL_STATE = {
    SKILL_IDLE: 0,
    SKILL_CASTING: 1
}

export default class Soldier extends Roles {
    constructor(scene, opts) {
        super();

        this._scene = scene;
        this._opts = opts;
        this._roleSpt = null;
        this._attackSpt = null;
        this._attacking = false; //普通攻击动画防抖
        this._skillState = SKILL_STATE.SKILL_IDLE; //技能释放动画防抖
        this._lifeNum = 18000;

        this._sprite = this.initSprite(this._scene, this._opts);

        this.skillList = this.initSkillList(this._scene);
    }

    /**
     * overwrite
     */
    initSprite(scene, opts) {
        this._roleSpt = scene.add.image(0, 0, 'soldier')
        this._roleSpt.setScale(0.2)

        this._attackSpt = scene.add.image(5, -5, 'sword')
        this._attackSpt.setScale(0)
        // this._attackSpt.setVisible(false)

        this._contianer = scene.add.container(opts.initPos.x, opts.initPos.y, [this._roleSpt, this._attackSpt])

        this._contianer.setSize(CONTAINER_SIZE.w, CONTAINER_SIZE.h)

        scene.physics.world.enable(this._contianer)

        this._contianer.body.setCollideWorldBounds(true)

        return this._contianer;
    }

    /**
     * 初始化技能列表
     */
    initSkillList(scene) {
        let _tempSkillsList = {}
        let _swordStromSprite = new SwordStrom(this._scene, {
            cbFunc: () => {
                this.changeSkillState(SKILL_STATE.SKILL_IDLE)
            }
        })
        this._contianer.add(_swordStromSprite.getSprite())
        _tempSkillsList['Q'] = _swordStromSprite;

        return _tempSkillsList
    }

    /**
     * attack action
     */
    attack() {
        if (this._attacking) return;
        this._attacking = true;

        let _tween = this._scene.tweens.add({
            targets: this._attackSpt,
            scaleX: 0.5,
            scaleY: 0.5,
            angle: -20,
            _ease: 'Sine.easeInOut',
            ease: 'Power2',
            duration: 200,
            // repeat: -1,
            onStart: () => {
                // console.log('started tween')
            },
            onComplete: (_t) => {
                _t.targets[0].setScale(0)
                this._attacking = false;
            }
        })
    }

    /**
     * 开始释放技能
     */
    startSkill(skillName) {
        if (this._skillState === SKILL_STATE.SKILL_CASTING) return;

        if (this.skillList[skillName] && this.skillList[skillName]._coolDown) {
            this._skillState = SKILL_STATE.SKILL_CASTING;
            this.skillList[skillName].start();
        }
    }

    /**
     * 修改人物施法状态
     */
    changeSkillState(state) {
        switch (state) {
            case SKILL_STATE.SKILL_IDLE:
                this._skillState = SKILL_STATE.SKILL_IDLE
                break;
            case SKILL_STATE.SKILL_CASTING:
                this._skillState = SKILL_STATE.SKILL_CASTING
                break;
        }
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