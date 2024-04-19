/**
 * 一个服务端实例
*/
const fs = require("fs")
const http = require("http")
const url = require("url")
/**
 * 1. 如何开启一个服务
 * 2. 如何根据网址显示不同页面
 * 3. 如何编写 get，post 请求的接口
 */
const server = http.createServer()
// 挂载request请求
server.on("request", (req, res) => {
/**
 * 通过下述代码学到了：
 * 1. 一个服务的本质 -- 就是一个服务请求过来，这边根据请求的地址响应不同的数据
 * 2. req是一个可读流 -- req.on("data", chunk => {})读取body数据，
 *          res是一个写入流 -- res.write("xx"); res.end("page1") 写入想要数据并结束
 * 3. 借助 url 模块，解析url地址，方便操作
 */
    // 设置 响应头 ，这边是客户端，肯定是没有办法设置请求头的
    /*res.setHeader("a1", "asddfa") // 设置单个响应头
    res.writeHeader(400, { // 设置状态码，以及多个响应头
        a2: 12,
        b: 33
    })
    console.log(req.headers) // 获取请求头*/
    // console.log(req.url)
    const urlObj = url.parse(req.url, true)
    /*console.log({urlObj});
    console.log(urlObj.query);*/
    if (urlObj.pathname === '/page1') {
        res.write("hello ") // 可以直接写入，可以无限次调用
        res.end("page1") // end相当的于一个写入流，写入内容并结束
    }
    if (urlObj.pathname === '/page2') {
        res.write("hello ")
        res.end("page2")
    }
    if (urlObj.pathname === '/htmlpage') {
        const _html = fs.createReadStream("./index.html")
        _html.on("data", chunk => {
            res.write(chunk)
        })
        _html.on("end", () => {
            res.end()
        })
    }
    if (urlObj.pathname === '/test.css') {
        const _css = fs.createReadStream("./test.css")
        _css.on("data", chunk => {
            res.write(chunk)
        })
        _css.on("end", () => {
            res.end()
        })
    }
    // get 请求
    if (urlObj.pathname === '/api1') {
        if (req.method!=="GET") {
            res.statusCode = 400 // 设置错误状态码 400
            res.end()
        }
        let {query} = urlObj
        res.end(JSON.stringify({
            data: [1,2,3],
            a: urlObj.query.a
        }))
    }
    // post 请求
    if (urlObj.pathname === '/api2') {
        if (req.method!=="POST") {
            res.statusCode = 400
            res.end()
        }
        let {query} = urlObj
        let post = ''
        req.on("data", chunk => {
            post+=chunk
        })
        // console.log(post)
        req.on("end", () => {
            res.end("响应post请求"+post)
        })
    }

    // res.end("hello world")
})
// 监听端口
// server.listen(3000)

/**
 * 一些扩展的操作
 */
// 1. listen的回调
server.listen(3000, () => {
    console.log("服务开启成功")
})
// 2. 请求头 、 响应头 -- 见 httpserver.js 行23，见httprequest.js 行35