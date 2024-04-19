const fs = require("fs")
/**
 * Buffer 相关
 * 基本上很少直接使用本身的api方法
 */
const bf1 = Buffer.alloc(10, "1")
console.log(bf1.toString())

const bf2 = Buffer.from("aaaaaaaaaaaasfsdfasdf")
console.log(bf2.toString())

const bf3 = Buffer.from(JSON.stringify({a:'1'}))
console.log(bf3.toString(), bf3.length)
const bf4 = Buffer.from("hello")

Buffer.isBuffer(bf1) // 判断一个对象是否时buffer
console.log(bf4.indexOf("ll"))

/**
 * Stream流 相关
 * 可读流，可写流，读写流，转化
 */
/**
 * 可读流
 */
const rStream = fs.createReadStream('./stream_read_exp.rar', {
    highWaterMark: 500
})
/**
 * 可写流
 */
const wStream = fs.createWriteStream('./stream_w.rar')
/* // 复杂写法
rStream.on('data',(buf) => {
    // console.log({buf})
    wStream.write(buf)
})
rStream.on('error', () => {})
rStream.on('end', () => {
    wStream.close()
})

wStream.on('finish', () => {
    console.log("写入完毕")
})*/
// 简单写法，直接写入 pipe方法一般用于两个流互相导入，读取流导入写入流
rStream.pipe(wStream)




