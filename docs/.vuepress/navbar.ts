import { NavbarConfig } from "vuepress";

// 顶部导航菜单
export const navbar: NavbarConfig = [
    // NavbarItem
    {
        text: '文档',
        link:'/doc/'
    },
    {
        text: '思考',
        link:'/think/'
    },
    {
        text: '中医',
        link:'/zy/'
    },
    // {
    //     text: '文档',
    //     children: [
    //         '/doc/javascript/README.md', 
    //         '/doc/vue/README.md', 
    //     ]
    // },
    // NavbarGroup
    // {
    //     text: '测试',
    //     children: ['/test/test1.md', '/test/test2.md'],
    // },
    {
        text: '关于',
        link: '/about.md',
    },
]