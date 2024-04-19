const fs = require("fs")
const nodePathModule = require("path")
const dir = fs.readdirSync("./testDir") // 读取文件夹，只能读取里面有哪些文件
// console.log(dir);
// fs.rmdirSync("./testdirson-n") // 删除文件夹，只能删除空目录


// exists stat
const state = fs.statSync('./testDir')
/*console.log(state);
console.log(state.isDirectory()); // 检测是否是一个目录 -- true
console.log(state.isFile()); // 检测是否是一个文件 -- false*/

/**
 * 实际上不会自己手写清空或者拷贝文件夹，一般都是使用现成的库
 * 手写相关方法是便于理解
 * @param path
 */
// 清空文件夹内文件
function empty(path) {
    if (fs.existsSync(path)) {
        const dir = fs.readdirSync(path)
        /*if (dir.length === 0) {
            fs.rmdirSync(path)
            return
        }*/
        dir.forEach(dItem => {
            let curPath = nodePathModule.join(path,dItem)
            const _state = fs.statSync(curPath)
            if (_state.isDirectory()) {
                empty(curPath)
            }
            else if (_state.isFile()) {
                fs.unlinkSync(curPath)
            }
        })
    }
}
// empty("./testDir")

// 拷贝文件夹
function copyDir(target,source) {
    // target 不存在则创建
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target)
    }
    // src 存在才能复制
    if (fs.existsSync(source)) {
        const dir = fs.readdirSync(source)
        dir.forEach(dItem => {
            let srcPath = nodePathModule.join(source,dItem)
            let targetPath = nodePathModule.join(target,dItem)
            const _state = fs.statSync(srcPath)
            if (_state.isDirectory()) {
                copyDir(targetPath, srcPath)
            }
            else if (_state.isFile()) {
                fs.copyFileSync(srcPath,targetPath)
            }
        })
    }
}
copyDir('./copyTest', './testDir')