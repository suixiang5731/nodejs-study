/**
 * path 相关
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
// NODE_ENV作为一个约定俗成的东西，在项目中存储设置一些变量
// console.log(process.env.NODE_ENV = "production")
// console.log(process.env.NODE_ENV)

/**
 * cwd 获取的是进程执行的文件夹，__dirname 始终是文件所在目录
 * 执行命令： node ./02常用工具模块/code.js 得到结果
 * S:\Develop\Projects\nodejs-study S:\Develop\Projects\nodejs-study\02常用工具模块
 * 由此可看出process.cwd() 和 __dirname 的区别
 */
// console.log(process.cwd(), __dirname)
/*process.stdout.write("请输入一个数字")
process.stdin.on("data", res => {
    console.log({res})
    console.log(res.toString())
    process.exit()
})*/
/*let num = 0
setInterval(() => {
    num++
    console.log(num)
    if (num === 5) {
        process.exit()
    }
}, 500)
process.on("exit", _ => {
    console.log("数完了")
})*/
/**
 * 在Node.js中，当主模块的执行完成时，Node.js 进程会自动退出，而 `setTimeout` 中的回调函数并不会阻止进程退出。因此，即使 `setTimeout` 设置了一秒后执行，但是当主模块执行完成后，Node.js 进程就会退出，导致定时器无法继续执行。
 *
 * 解决这个问题的一种方法是在主模块中保持一个活动状态，可以通过监听某些事件或者使用类似 `setInterval` 的函数来实现。下面是一个示例：
 *
 * ```javascript
 * let num = 0;
 *
 * setTimeout(() => {
 *     console.log(2);
 * }, 1000);
 *
 * setInterval(() => {
 *     // 这里可以放一些持续执行的逻辑
 *     num++;
 *     if (num === 5) {
 *         process.exit();
 *     }
 * }, 100);
 * ```
 * 在这个示例中，我们使用了 `setInterval` 来保持进程的活动状态，
 * 每 100 毫秒检查一次 `num` 的值是否达到 5，如果达到则调用 `process.exit()` 来退出进程。
 * 这样一来，即使主模块的代码执行完成，
 * 进程也会因为 `setInterval` 持续执行而保持活动状态。
 */
// console.log(process.memoryUsage()) // 打印内存使用情况

let util = require("util")
let fs = require("fs")

/*
function f1(fn) {
    // setTimeout(_ => {
    //     fn(10)
    // }, 2000)
    return new Promise(resolve => {
        setTimeout(_ => {
            resolve(10)
        }, 2000)
    })
}
// f1().then(res => {
//     console.log(res)
// })
const cbF1 = util.callbackify(f1)
//node所有的异步操作都是通过回调获取结果的，而且几乎第一次个参数都是错误，后面的才是结果
cbF1(function (err, num){
    console.log(num)
})
*/

// 原始写法
fs.readFile("./test.txt",(err, res) => {
    console.log(res.toString())
})
// 转 promise 再使用 -- 推荐
const promiseReadFile = util.promisify(fs.readFile)
promiseReadFile("./test.txt").then(res => {
    console.log(res.toString())
})