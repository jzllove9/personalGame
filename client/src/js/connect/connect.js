/**
 * 与后端通信，一个客户端尽量保持只有一个
 */
const MyWorker = require("worker-loader!./worker.js");

export default class ConnectClient {
    constructor(){
        this._connectWorker = null;

        this.initConnect()
    }

    initConnect(){
        this._connectWorker = new MyWorker()

        this._connectWorker.onmessage = function(e){
            console.log(e)
        }

        this._connectWorker.postMessage({
            text: 'this is fun worker'
        })
    }

    destory(){
        this._connectWorker.terminate();
    }
}