import { NavbarConfig } from "vuepress";

// 顶部导航菜单
export const navbar: NavbarConfig = [
    // NavbarItem
    {
        text: '文档',
        link: '/test/',
    },
    // NavbarGroup
    {
        text: '测试',
        children: ['/test/test1.md', '/test/test2.md'],
    },
    {
        text: '关于',
        link: '/about.md',
    },
]