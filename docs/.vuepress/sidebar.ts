import { SidebarConfig } from "vuepress";

// 右侧菜单：
// 不同子路径下的页面会使用不同的侧边栏
export const sidebar: SidebarConfig = {
    '/test/': [
      {
        text: '首页',
        // collapsible: true,
        children: ['/test/test1.md', '/test/test2.md'],
      },
      {
        text: '测试页面',
        // collapsible: true,
        children: ['/test/test1.md', '/test/test2.md'],
      },
      {
        text: '测试页面',
        collapsible: true,
        children: ['/testxx/vite.md', '/testxx/webpack.md'],
      },

      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          {
            text: 'baidu',
            link: 'https://baidu.com',
            children: [],
          },
        ],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
    '/test2/': [
      {
        text: 'VuePress Reference',
        collapsible: true,
        children: ['/reference/cli.md', '/reference/config.md'],
      },
      {
        text: 'Bundlers Reference',
        collapsible: true,
        children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
      },
    ],
  }