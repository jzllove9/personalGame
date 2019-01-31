/**
 * 职业基类
 */

let DamageTextCfg = {
    fontFamily: 'Arial',
    fontSize: 25,
    color: '#ff0000'
}

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

        this._sprite = null;
        this._contianer = null;
        this._lifeNum = 10000;

        //debug
        // setInterval(()=>{
        //     this.getDamage(5000)
        // }, 1500)
    }

    /**
     * 初始化 role graphics
     */
    initGraphics() {
        console.log('base roles class was initializationed, please extends and overwrite it')
    }

    /**
     * 攻击动作
     */
    attack() {
    }

    /**
     * 收到伤害
     */
    getDamage(damageNum) {
        this._lifeNum -= damageNum;
        this.showGetDamageNum(damageNum)
    }

    /**
     * 显示受伤数据
     */
    showGetDamageNum(damageNum) {
        if (damageNum >= 2000) {
            DamageTextCfg.fontSize = 45;
            let _damageText = this._scene.add.text(this._contianer.x, this._contianer.y - 50, damageNum, DamageTextCfg)
            _damageText.setOrigin(0.5, 0.5)
            _damageText.setScale(0)

            let _tween = this._scene.tweens.add({
                targets: _damageText,
                _ease: 'Sine.easeInOut',
                ease: 'Power2',
                scaleX: 1,
                scaleY: 1,
                duration: 400,
                onComplete: () => {
                    _damageText.destroy(true);
                    _tween.stop()
                    _tween = null;
                }
            })
        } else {
            DamageTextCfg.fontSize = 25;
            let _damageText = this._scene.add.text(this._contianer.x, this._contianer.y - 30, damageNum, DamageTextCfg)
            _damageText.setOrigin(0.5, 0.5)

            let _tween = this._scene.tweens.add({
                targets: _damageText,
                _ease: 'Sine.easeInOut',
                ease: 'Power2',
                y: this._contianer.y - 50,
                duration: 500,
                 onComplete: () => {
                    _damageText.destroy(true);
                    _tween.stop()
                    _tween = null;
                }
            })
        }
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