/**
 * 通信Worker文件
 */

self.onmessage = function(e){
    console.log(e)

    self.postMessage({
        text: 'Yes it is!'
    })
}