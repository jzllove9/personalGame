import Phaser from 'phaser'
import Player from '../roles/mainPlayer'

export default class BaseScene extends Phaser.Scene {
    graphics = null;

    preload() {
        console.log('preload')
    }

    create() {
        let _r = new Player(this, {
            x: 150,
            y: 150,
            height: 100,
            width: 150,
            lineStyle:{
                tickness: 3,
                color: 0xFFFF00,
                opacity: 1
            },
            fillStyle:{
                color: 0xFF00FF,
                opacity: 0.5
            }
        })
    }

    update() {
    }
}