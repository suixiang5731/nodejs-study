const express = require('express')
const router = express.Router()
/**
 * multer 针对 Content-Type = multipart/form-data
 */
const multer= require("multer")
// 第三方库处理文件上传
const uploader = multer({
    dest: 'upload/' // 设置上传目录
})
// 直接使用 app.get() 也相当于使用了一个中间件
// 接收 get 请求
router.get('/api1', (req,res) => {
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
router.post('/api2', (req,res) => {
    console.log(4)
    // post 请求参数 获取，通过body获取，但是根据body类型不同，需要不同的中间件进行解析
    // 必须先通过中间件解析才能知道 body 的数据，否则直接获取会得到一个 req.body：undefined
    const postBody = req.body
    console.log({postBody})
    res.json({b: 999})
})
// 文件接收 app.use 可以有多个回调，这里的 uploader 也相当于一个中间件
router.post('/api3', uploader.single("file"), (req,res) => {
    console.log(5)
    const postBody = req.body
    console.log({postBody})
    res.json({msg: '文件已接收'})
})
// 返回网页，访问的根目录就把当前路径下的index.html返回过去
router.get('/',(req,res) => {
    res.sendFile(__dirname+"/index.html")
})

module.exports = router