/**
 * 一个客户端实例
 */
const http = require("http")
// get 请求
http.get("http://localhost:3000/api1?a=789", res => {
    let resData = ''
    // res 是一个可读流
    res.on("data", chunk => {
        resData+=chunk
    })
    res.on("end", () => {
        console.log(JSON.parse(resData))
    })

})
// post 请求
const req = http.request({
    hostname: "localhost",
    port: 3000,
    path: "/api2",
    method: "POST"
}, res => {
    let resData = ''
    // res 是一个可读流
    res.on("data", chunk => {
        resData+=chunk
    })
    res.on("end", () => {
        console.log(resData)
    })

})
// 设置请求头
/*req.setHeader("a1", "asddfa") // 设置单个请求头
req.writeHeader(400, { // 设置状态码，以及多个请求头
    a2: 12,
    b: 33
})*/
// req是一个写入流，此处写入 body 报文，待客户端接受
req.write(JSON.stringify({
    a: 123,
    b: 456,
    c: 12
}))
req.end()