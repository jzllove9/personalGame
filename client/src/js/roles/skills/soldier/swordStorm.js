import BaseSkill from '../baseSkill'

export default class SwordStorm extends BaseSkill {
    constructor(scene, opts) {
        super(scene);

        opts = opts ? opts : {
            cbFunc: () => {
                console.log('you have no skill callback function!')
            }
        }
        this._endCb = opts.cbFunc;
        this._coolDownTime = 7;
        this._tween = null;
    }

    /**
     * overwrite initSkill func.
     */
    initSkill(scene) {
        this._sprite = scene.add.image(-1, 0, 'swordStrom')
        this._sprite.setScale(1)
        this._sprite.setVisible(false)
    }

    getSprite() {
        return this._sprite;
    }

    /**
     * overwrite start func.
     */
    start() {
        if (!this._coolDown) return;

        this._sprite.setVisible(true)

        this._coolDown = false;

        if (!this._tween) {
            this._tween = this._scene.tweens.add({
                targets: this._sprite,
                angle: -360,
                _ease: 'Sine.linear',
                duration: 1000,
                repeat: 5,
                onStart: () => {
                    // console.log('started tween')
                },
                onComplete: (_t) => {
                    // _t.targets[0].angle = 0;
                    this._sprite.setVisible(false)
                    this._endCb();

                    setTimeout(() => {
                        this._coolDown = true
                    }, this._coolDownTime * 1000);
                }
            })
        } else {
            this._tween.restart();
        }

    }
}