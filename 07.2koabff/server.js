const Koa = require('koa')
const views = require('koa-views')
const cors = require('koa-cors')
const koarouter = require('koa-router')
const {koaBody} = require('koa-body')
const router = new koarouter()
const app = new Koa()
let arr = [
    {
        name: '电脑',
        id: '1000'
    },
    {
        name: '手机',
        id: '1001'
    },
    {
        name: '键盘',
        id: '1002'
    },
]
let arr2 = [
    {
        name: '电脑',
        price: 5000,
        count: 20,
        id: '1000'
    },
    {
        name: '手机',
        price: 2000,
        count: 50,
        id: '1001'
    },
    {
        name: '键盘',
        price: 100,
        count: 30,
        id: '1002'
    },]

app.use(cors()) // 使用中间件解决跨域
app.use(koaBody({
    multipart: true // 开启文件流解析
}))
router.post("/login", async (ctx, next) => {
    if (ctx.request.body.username === "user1" && ctx.request.body.password === "12345") {
        ctx.response.body = {
            message: "登录成功"
        }
    } else {
        ctx.response.body = {
            message: "账号或密码错误"
        }
    }
})
router.get("/list", async (ctx, next) => {
    ctx.response.body = {
        list: arr
    }
})
router.get("/detail", async (ctx, next) => {
    let _id = ctx.query.id+''
    arr2.forEach(item => {
        if (item.id+'' === _id) {
            ctx.response.body = item
        }
    })
})

app.use(router.routes())
app.listen(4000)