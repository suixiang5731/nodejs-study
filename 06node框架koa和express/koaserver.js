const koa = require("koa")
const { koaBody } = require('koa-body')
const koaRouter = require('koa-router')
const router = new koaRouter()
const app = new koa()

// 定义 路由路径 ，下面 app.use(router.routes()) 使用定义的路由
router.get("/api1", (ctx,next) => {
    ctx.body = {
        a: 123,
        b: 23
    }
})
router.post("/api2", (ctx,next) => {
    console.log(ctx.request.body)
    ctx.body = 'hello2'
})


app.use(koaBody({
    json: true, // 默认为 true 可不用配置
    urlencoded: true, // 默认为 true 可不用配置
    multer: true,  // 文件上传使用，需要手动打开
}))

// app.use(async () => {}) // koa 可以使用异步回调
// 注意，express中如果中间件内不调用next()则会卡住，而koa中内不调用next()则直接在该中间件结束
app.use((ctx, next) => {
    // console.log('url>>', ctx.url)
    // console.log('query>>', ctx.query)
    // console.log('params>>', ctx.params)
    // ctx.response.set()，下面是简写
    ctx.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
    })
    // if (ctx.method === "POST") {
    //     console.log("request.body>>", ctx.request.body)
    // }

    console.log(1)
    // ctx.response.body = "hello "，下面是简写
    ctx.body = "hello "
    next()
})

/*
app.use((ctx, next) => {
    console.log(2)
    ctx.body = "world"
    next()
})
app.use((ctx, next) => {
    console.log(3)
    ctx.body = "!"
    next()
})
*/

app.use(router.routes())

app.listen(3000)