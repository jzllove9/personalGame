import Phaser from 'phaser'

export default class BaseScene extends Phaser.Scene {
    preload(){
        console.log('preload')
    }

    create(){
        console.log('created')
    }

    update(){
        // console.log('update')
    }
}