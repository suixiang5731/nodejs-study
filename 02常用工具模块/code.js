/**
 * path 相关
 * @type {path.PlatformPath | path}
 */
let path = require("path")
let demo="./src/a/b/c.js"
/*
// console.log(path.basename(demo))
// console.log(path.dirname(demo))
console.log(path.parse(demo))
// console.log(path.format(demo))
let demo2="C:/src/a/b/c.js"
console.log(path.parse(demo2)) // demo2 加上一个 'C:'，打印出的 root有值 { root: 'C:/', dir: 'C:/src/a/b', base: 'c.js', ext: '.js', name: 'c' }
let formatDemo = path.format(path.parse(demo2))
// console.log(formatDemo) // 把 path.parse() 的值还原回来
*/
/*
// 使用 __dirname 配合 path.resolve(__dirname, demo)，会得到一个绝对路径
console.log("resolve>>>", `"${path.resolve(__dirname, "./a.js")}"`)
// __dirname -- 全局变量，表示绝对路径
console.log("__dirname>>>", `"${__dirname}"`)
// '../' 表示上一级目录
console.log("上一级目录>>>", `"${path.resolve('../', "./a.js")}"`)
// 直接拼接
console.log("直接拼接>>>", `"${path.join('b', "./a.js")}"`)
*/
/**
 * process 相关
 */
// 命令行执行命令 -- node code.js -a -c ，查看下面两个变量输出内容
// console.log(process.argv)
// console.log(process.execArgv)


// console.log(process.env)
console.log(process.env.NODE_ENV = "production")
console.log(process.env.NODE_ENV)


