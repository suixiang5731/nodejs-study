const koa = require('koa')
const app = new koa()
const kaorouter = require('koa-router')
const router = new kaorouter()
const views = require('koa-views')
const ejs = require('ejs')
const fs = require('fs')

// 调用 koa-views 并传入一个路径，指定模板引擎的目录
// 使用了 koa-views 之后就不用 引入 require('ejs') ejs库了
app.use(views('./views', {
    // 指定模板文件的扩展名，告知 koa-views 自动调用 ejs 库渲染模板
    extension: 'ejs'
}))

router.get('/', async (ctx,next) => {
    /*// 方式一 先读取文件在渲染
    // 读取 html文件内容并转换为string
    const _template = fs.readFileSync('./views/index.ejs').toString()
    // 使用 ejs 库渲染 _html 字符串，并传入需要的变量，此处为 word
    // 注意：ejs.render() 是一个异步操作
    const _html = await ejs.render(_template, {
        word: 'hello ejs'
    })
    // 赋值个 response.body
    ctx.body = _html*/

    /*// 方式二 直接调用 ejs.renderFile() 直接渲染文件
    ejs.renderFile('./views/index.ejs',{
        word: 'hello ejs'
    }, (err,_html) => { // 回调写法，ejs.renderFile() 也可以用 await
        ctx.body = _html
    })*/

    // 方式三 使用 koa-views
    // 注意 ctx 本身是没有 render() 方法的，是通过 app.use(views()) 使用了 koa-views 之后才有的
    await ctx.render("index",{ // 实际上 ctx.render() 内部的操作就是执行上面的两种方式中的某一种
        word: "hello ejs"
    })
})

app.use(router.routes())
app.listen(3000)