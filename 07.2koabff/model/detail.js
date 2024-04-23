const request = require('request')
// 带在路径里的动态路由 /detail/1000 -> 使用 params，使用问号的 /detail?id=1000 使用 query
module.exports = async function (ctx, next) {
    const _id = ctx.request.params.id
    const res = await new Promise((resolve,reject) => {
        // 此处使用query传过去
        request.get(`http://localhost:4000/detail?id=${_id}`, (err,res,body) => {
            resolve(body)
        })
    })

    await ctx.render('detail', JSON.parse(res))
}