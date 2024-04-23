import child_process from "node:child_process"; // node 原生自带 使用子进程运行命令
child_process.exec("del a.js")
/**
 * git的一键提交
 */
child_process.exec("git add .", (err) => {
    if (err) throw err
    let _str1 = '【feature】'
    let _str2 = '1.91'
    if (process.argv[2] === '2') {
        _str1 = '【bugfix】'
    }
    if (process.argv[3] === '2') {
        _str2 = '1.92'
    }
    // process.argv[4] 存储 commit msg -- 只是根据此处的定义第四个参数为此内容
    child_process.exec('git commit -m' + _str1 + _str2+process.argv[4], (err) => {
        if (err) throw err
    })
})
