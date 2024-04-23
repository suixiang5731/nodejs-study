const koa = require('koa')
const views = require('koa-views')
const router = require('./router')
const koaStatic = require("koa-static")
const app = new koa()

app.use(views('./views', { extension: 'ejs' }))
app.use(koaStatic('./static'))
// 验证cookie 需要写在路由前面
app.use(async (ctx,next) => {
    if (ctx.url !== "/login") {
        if (!ctx.cookies.get("username")) {
            ctx.redirect('/login')
        } else {
            return next()
        }
    } else {
        return next()
    }
})
app.use(router.routes())
app.listen(3000)