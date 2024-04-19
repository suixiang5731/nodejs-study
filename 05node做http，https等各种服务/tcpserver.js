/**
 * 用的比较少，知道node有这个能力就行
 */
const net = require("net")
const server = net.createServer(socket => {
    // 连接事件
    socket.on("data", data => {
        console.log(data.toString())
        socket.write("tcp hello 连接")
    })
    // 结束事件
    socket.on("end", data => {
        console.log(data.toString())
        socket.write("tcp end")
    })
})
server.listen(5000)
/* // 这种写法也可以
const tcpServer = net.createServer()
tcpServer.on("connection", socket => {
    // 连接事件
    socket.on("data", data => {
        console.log({data})
        socket.write("tcp hello 连接")
    })
    // 结束事件
    socket.on("end", data => {
        console.log({data})
        socket.write("tcp hello 连接")
    })
})*/
