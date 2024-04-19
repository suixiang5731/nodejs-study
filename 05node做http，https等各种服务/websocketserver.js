// 使用 ws 包，开启，websocket 服务
const ws = require("ws")
const wsServer = ws.Server
const wss = new wsServer({port: 4000})
// 监听连接之后再里面进行消息监听
wss.on("connection", wsconnect => {
    wsconnect.on("message", (mes, err) => {
        console.log(mes.toString())
        wsconnect.send("hello ~ from ws server", () => {})
    })
})