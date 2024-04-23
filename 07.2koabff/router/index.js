const kaoRouter = require('koa-router')
const router = new kaoRouter()
const index = require('../model/index.js')
const login = require('../model/login.js')
const detail = require('../model/detail.js')

router.get('/', async (ctx, next) => {
    await index(ctx,next)
})

router.get('/login', async (ctx, next) => {
    await login(ctx,next)
})

// 动态路由 例如 /detail/1000
router.get('/detail/:id', async (ctx, next) => {
    await detail(ctx,next)
})

module.exports = router