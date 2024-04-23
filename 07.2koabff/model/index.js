const request = require("request");
module.exports = async function (ctx, next) {
    // if (ctx.cookies )
    const res = await new Promise((resolve,reject) => {
        request.get('http://localhost:4000/list', (err,res,body) => {
            resolve(body)
        })
    })

    await ctx.render('index', JSON.parse(res))
}