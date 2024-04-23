#!/usr/bin/env node
// 使用 #!/ 设置js的运行环境，全平台通用

// console.log(1)

/**
 * 必备模块
 * 1. commander 用于添加指令 比如 --help ， -v 等
 * 2. inquirer 用于用户交互，它的核心本质就是使用了 stdin 和 stdout
 */
// node 14之后已经支持 esmodule 14之前的版本只支持 commonjs
import inquirer from "inquirer";
import downGit from "download-git-repo"
import fs from "fs"
import path from "path"
import chalk from "chalk" // 美化的包
import ora from "ora" // 美化的包，添加一个下种的loading效果
/**
 * ora 等待时转圈效果，使用：
 *          const spiner = ora("下载中").start() // 开始转
 *          spiner.stop(); // 停止
 * progress 等待时进度条效果，使用：
 *      const downPro = new Process("下载中", { total: 10 })
 *      setTimeout(() => {
 *          downPro.tick()
 *      })
 * 我们这里不适合使用 progress，因为不知道文件下载多少了
 */
// console.log({inquirer})

// 使用 inquirer 设置问答的问题
// prompt 中 type的类型有：input，list，checkbox，confirm
// 每个问题中必须有的三个字段：type，message，name
/*inquirer.prompt([
    {
        type: "input",
        // 问题内容
        message: "项目名称？",
        // 键名，不可重复！
        name: "projectName",
    },
    {
        type: "list", // 单选
        message: "选择vue/react",
        name: "projectType",
        // 选择题多一个选项字段
        choices: [
            'vue',
            'react',
        ],
    },
    {
        type: "checkbox", // 多选
        message: "选择功能",
        name: "projectFeature",
        // 选择题多一个选项字段
        choices: [
            'babel',
            'webpack',
            'router',
        ],
    },
    {
        type: "confirm",
        message: "是否生成",
        name: "render",
    },
])
    .then(res => {
        // console.log({res})
        // console.log({res}) 打印结果 如下
        // res: {
        //   projectName: 'aaa',
        //   projectType: 'vue',
        //   projectFeature: [ 'babel', 'webpack' ],
        //   render: true
        // }


        let _target = 'facebook/react'
        let _outputDir = path.resolve(process.cwd(), res.projectName)
        if (res.projectType === 'vue') {
            _target = 'vuejs/vue'
        }
        fs.mkdirSync(_outputDir) // 先创建拉取下来仓库的存放文件夹
        const spiner = ora("下载中").start()  // 开始转
        // 拉取git仓库， 仓库名规则：'github:'+用户名+'/'+项目名
        // process.cwd() 获取执行当前命令的路径
        // 这里正常开发时替换为自己的项目专用的模板
        downGit('github:' + _target,
            _outputDir, {clone: false},
            function (err) {
                if (err) throw err
                spiner.stop(); // 停止
                console.log(chalk.green("下载成功"))
                // console.log(chalk.hex("#fff")("下载成功"))
                // console.log(chalk.rgb(11,255,366)("下载成功"))
            })
    })*/

import {Command} from 'commander'
// commander 使用，另外注意 commander 自带 --help ，不在需要自定义了
// console.log(process.argv)
// commander 的本质 原理
/*if (process.argv[2] === '-v') {
    console.log('1.0.1121')
}*/

const program = new Command()
// 配置对应指令的响应内容， <num> 尖括号表示必填， [num] 方括号表示可填可不填
program.option("-a <num>", "描述：-a num 必填", (num) => {
    console.log("u use -a and input "+ num)
})
program.version('1.01.1') // 调用  program.version() 设置 -v 版本，也可以自己写
// 不带 '-' 的指令使用 program.command() 定义
program.command("init <name>").action(name => {
    console.log(name)
})

program.parse(process.argv) // commander 的本质就是代替我们解析 process.argv，这行代码要写在最后

/**
 * 正常开发时的模板操作
 * 1. 一个完整模板(包含所以配置项)放在git仓库托管
 * 2. 使用git-download库把模板从托管的仓库拉下来
 * 3. 根据用户选择进行一定地删减，如果有的内容无法删减，
 *      一般是把这款内容单独提出来放在一个别的git仓库保存，有需要时再从该仓库提取
 * 4. 最终生成一个用户需要的模板
 */