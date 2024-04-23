#!/usr/bin/env node
// 使用 #!/ 设置js的运行环境，全平台通用

import cp from "copy-paste" // node 的自动复制工具
let routeArr =[
    {}
]
// 例如路由的路径  www.xxx.com/#/xx/yy/zz
let url = process.argv[2]
url = url.split("/#")[1]

routeArr.forEach(item => {
    if (item.path === url) {
        console.log(item.component)
        cp.copy(item.component) // 自动把内容复制到粘贴板
    }
})