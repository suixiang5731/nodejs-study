/* // 浏览器控制台调试使用的代码
const ws = new WebSocket("ws://localhost:4000/")
ws.onopen=function () {
    console.log("connect")
}
ws.onmessage=function (e) {
    console.log(e.data)
}*/
const websocket = require("ws")
const wsclient = new websocket("ws://localhost:4000/")
wsclient.on("open",function () {
    wsclient.send('hi open')
})
wsclient.on("message",function (data) {
    console.log(data.toString())
})
// 执行命令 node websocketclient.js
