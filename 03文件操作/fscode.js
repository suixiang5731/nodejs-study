const fs = require("fs")
/**
 * 关于文件读取api的几个规律
 * 1. 文件读取-方法-全都是异步操作 -> 所以都需要使用 回调和promise
 * 2. 文件操作的异步形式都会有一个回调，在最后一个参数
 * 3. 所有的方法都会同步版本
 */

// fs.writeFile("./test.txt", "hello1", function (err,res) {}) // 异步写法
// fs.writeFileSync("./test.txt", "hello1", function (err,res) {})// 同步写法
// const writeFileSyncRes = fs.writeFileSync("./test2.txt", "hello2")
/*
fs.readFile("./test.txt", (err,res) => {
    if (err) throw err
    console.log("res>>", res.toString())
})
const readFileSyncRes = fs.readFileSync("./test2.txt")
console.log(readFileSyncRes.toString())
*/

// fs.unlink("./test2.txt", () => {}) // 删除
// fs.unlinkSync("./test2.txt") // 同步版本 -- 删除
// fs.appendFileSync("./test.txt", " world") // 文件内写入新内容
// fs.renameSync("./test.txt", "./reTest.txt") // 重命名
// fs.renameSync("./test.txt", "./testDir/reTest.txt") // 重命名顺便修改文件路径
// 拷贝
// fs.copyFileSync("./test.txt", "./testDir/copyTest.txt")
/**
 * fs的一些高级文件操作
 */
// 监听 watch
/*fs.watch("./test.txt", (err,filename) => {
    console.log(filename)
})*/
// 打开 open 用的不多，了解即可
fs.open("./test.txt","r", (err,fd) => {
    let bf = new Buffer(3)
    fs.read(fd,bf,0,3,2, (err,res) => {
        console.log(res)
        console.log(bf.toString());
        console.log(err);
        fs.open("./test2.txt", "w",(err,fd2) => {
            fs.writeSync(fd2,bf,0,3,0)
        })
    })
})
