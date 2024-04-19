/**
 * fs-extra compressing 使用
 */
/**
 * fs-extra 使用
 */
const fs = require("fs-extra")
const cm = require("compressing")
const path = require("path")
// 拷贝文件
// fs.copySync("./package.json", "./copy-package.json")

// 直接拷贝整个文件夹
// fs.copySync("./testDir", "./copyTestDir")

// 清空文件夹
// fs.emptyDirSync('./copyTestDir')

// 删除文件或者文件夹
// fs.removeSync('./copyTestDir')

// 移动文件或者文件夹
// fs.moveSync('./copy-package1.json','./testDir/copy-package1.json')
// fs.moveSync('./copyTest','./testDir/copyTest')

// 把内容输出进文件内，如果文件或者文件夹不存在，则自动创建
// fs.outputFileSync("./test1/test11.txt", "456465")

/**
 * compressing 使用
 */
// 压缩
/*cm.zip.compressDir("./test1", "./test1.zip").then(res => {
    console.log(res)
})*/
// 解压
cm.zip.uncompress("./test1.zip", "./test2").then(res => {
    console.log(res)
})


