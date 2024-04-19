// https -> http，https多了一个加密，公钥和私钥
// 证书获取 -> 购买 或者 使用工具本地生成 安装 mkcert -- 'npm i -g mkcert'
// 使用 命令生成证书 -- 'mkcert create-ca' 和 'mkcert create-cert'
const https = require("https")
const fs = require('fs')
// 其他用法和 http 一模一样
const options = {
    key: fs.readFileSync(__dirname + '/cert.key'),
    cert: fs.readFileSync(__dirname + '/cert.crt'),
}
const app = https.createServer(options, (req,res) => {
    res.end("hello https")
})
app.listen(3101)
// 访问 https://localhost:3101
