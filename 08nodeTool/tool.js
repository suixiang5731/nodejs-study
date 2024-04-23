// 一些 小工具 的思路
//类似-》a页面-》b页面-树形表单（庞大），搜索-data methods日期选择
// 准备一个工具，把一些经常复用的内容，到时候通过工具直接输出出来
// 自动生成工具

import inquirer from "inquirer";
import fs from 'fs'


inquirer.prompt([
    {
        type: 'list',
        message: '你要使用哪个内容',
        name: 'content',
        choices: [
            'treeTable',
            'page',
            'date',
            'search',
        ],

    }
])
    .then(ans => {
        let str = fs.readFileSync('./demo/').toString()
        console.log({str}) // 打印出来直接复制，省的自己找了
        if (ans.content === 'treeTable') {}
    })

//项目-》路由从后端拉过来的，有很多路由不好找对应的组件，通过路由地址 找到 组件
// 自动查找工具