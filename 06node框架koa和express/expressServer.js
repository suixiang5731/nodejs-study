const express = require("express")
const router = require("./router.js");
const app = express()

// 直接使用 use， 里面定义一个函数也相当于一个中间件，对所有路径生效
app.use((req,res,next) => {
    // 开发环境使用 webpack dev server
    // 生产环境使用 配置针对请求的设置
    /**
     * 控制跨域访问来源，也就是允许跨域的来源 ‘*’ 代表所有，
     * 也可以设置单个的 如下面的 localhost:8000，一般使用 * 即可
     * res.header('Access-Control-Allow-Origin','https://localhost:8000')
     */
    res.header('Access-Control-Allow-Origin','*')
    /**
     * 允许跨域的请求方法
     */
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
    /**
     * 允许的跨域的请求头，如果有额外的请求头需要在后面加上，如下面的 a ，b
     * res.header('Access-Control-Allow-Headers','Content-Type,a,b')
     */
    res.header('Access-Control-Allow-Headers','Content-Type')
    console.log(1)
    next()
})
app.use((req,res,next) => {
    console.log(2)
    next()
})

// 静态目录，使用 express.static() 配置静态文件目录，并使用
// 可以随意访问该目录
app.use(express.static(__dirname+"/static"))

// 可以通过查看请求的 请求头的 Content-Type 字段的值获取当前body的请求类型
/**
 * 当前的body类型为 urlencoded 时 ，直接调用 express 内置的 urlencoded 方法解析body
 * express.urlencoded() 针对 Content-Type = application/x-www-form-urlencoded 表单提交或者时纯字符串使用这个处理
 */
app.use(express.urlencoded())
/**
 * 当前的body类型为 json 时 ，直接调用 express 内置的 json 方法解析body
 * express.json() 针对 Content-Type = application/json
 */
app.use(express.json())
/**
 * 一些其他的解析 body 的方法 -- 不常用
 * express.raw() //  针对 Content-Type = application/octet-stream 流传输累了
 * express.text() //  针对 Content-Type = text/plain 纯文本类型
 */

/*
// 路由相关全部提取到 router.js 中 ，将中间件使用和 路由分离开来，更加清晰易于开发
// 直接使用 app.get() 也相当于使用了一个中间件
// 接收 get 请求
app.get('/api1', (req,res) => {
    // res.end("123") // 返回字符串
    // res.sendFile() // 返回文件
    console.log(3)
    // get请求参数 获取
    const getQuery = req.query
    console.log({getQuery})

    // 返回json，该方法同时会设置 content-type 为 json
    res.json({a: [1,2,3]})
})
// 接收 post 请求
app.post('/api2', (req,res) => {
    console.log(4)
    // post 请求参数 获取，通过body获取，但是根据body类型不同，需要不同的中间件进行解析
    // 必须先通过中间件解析才能知道 body 的数据，否则直接获取会得到一个 req.body：undefined
    const postBody = req.body
    console.log({postBody})
    res.json({b: 999})
})
// 文件接收 app.use 可以有多个回调，这里的 uploader 也相当于一个中间件
app.post('/api3', uploader.single("file"), (req,res) => {
    console.log(5)
    const postBody = req.body
    console.log({postBody})
    res.json({msg: '文件已接收'})
})
// 返回网页，访问的根目录就把当前路径下的index.html返回过去
app.get('/',(req,res) => {
    res.sendFile(__dirname+"/index.html")
})
*/

app.use("/", router) // 或者直接写 app.use(router) 效果一样

// 添加前缀，这样 使用时的路由也要加上该前缀，如此一来就可以分模块了
// app.use("/mode1", router)
// app.use("/mode2", router2)

app.listen(8000)