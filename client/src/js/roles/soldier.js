/**
 * 战士类
 */
import Roles from './roles'

const CONTAINER_SIZE = {w: 50, h: 50}

export default class Soldier extends Roles {
    constructor(scene, opts) {
        super();

        this._scene = scene;
        this._opts = opts;
        this._roleSpt = null;
        this._attackSpt = null;
        this._attacking = false;

        this._sprite = this.initSprite(this._scene, this._opts);
    }

    /**
     * overwrite
     */
    initSprite(scene, opts) {
        this._roleSpt = scene.add.image(0, 0, 'soldier')
        this._roleSpt.setScale(0.2)

        this._attackSpt = scene.add.image(10, -10, 'sword')
        this._attackSpt.setScale(0)
        // this._attackSpt.setVisible(false)

        let _container = scene.add.container(opts.initPos.x, opts.initPos.y, [this._roleSpt, this._attackSpt])

        _container.setSize(CONTAINER_SIZE.w, CONTAINER_SIZE.h)

        scene.physics.world.enable(_container)

        _container.body.setCollideWorldBounds(true)

        return _container;
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
            angle: -40,
            _ease: 'Sine.easeInOut',
            ease: 'Power2',
            duration: 200,
            // repeat: -1,
            onStart: () => {
                console.log('started tween')
            },
            onComplete: (_t) => {
                _t.targets[0].setScale(0)
                this._attacking = false;
            }
        })
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