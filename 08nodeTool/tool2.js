#!/usr/bin/env node
// 上面这一行代码使用 #!/ 设置js的运行环境，全平台通用

import cp from "copy-paste" // node 的自动复制工具
let routeArr =[
    {}
]
// 例如路由的路径  www.xxx.com/#/xx/yy/zz
let url = process.argv[2]
url = url.split("/#")[1]

routeArr.forEach(item => {
    if (item.path === url) { // 找到路由对应的组件路径打印并复制
        console.log(item.component)
        cp.copy(item.component) // 自动把内容复制到粘贴板
    }
})

// 根据 数据 生成 表格 excel 小工具

// 一些可以开发小工具的方面
// 1，重复操作 2，复杂的数据筛选查找 3，命令行操作