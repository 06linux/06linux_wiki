import { SidebarConfig } from "vuepress";

// 右侧菜单：
// 不同子路径下的页面会使用不同的侧边栏
export const sidebar: SidebarConfig = {

  // 技术文档
  '/doc/': [
    {
      text: 'JavaScript',
      link: '/doc/javascript/',
      // collapsible: true,
      children: [
        '/doc/javascript/lang.md',
        '/doc/javascript/ref.md',
      ],
    },
    {
      text: 'Vue',
      // collapsible: true,
      link: '/doc/vue/',
      children: [
        '/doc/vue/lang.md',
        '/doc/vue/ref.md',
      ],
    },
  ],


  '/think/': [
    {
      text: '每日一思',
      link: '/think/mind/',
      // collapsible: true,
      children: [
        '/think/mind/wuliqiang.md',
        '/think/mind/zhangyiming.md',
      ],
    },
    {
      text: '我的日记',
      link: '/think/log/',
      collapsible: true,
      // children: [
      //   '/think/log/log1.md',
      //   '/think/log/log2.md',
      // ],
    },
  ],

  '/zy/': [
    {
      text: '中医学习',
      link: '/zy/',
      // collapsible: true,
      children: [
        '/zy/zhenjiu.md',
        '/zy/bencao.md',
        '/zy/neijing.md',
        '/zy/shanghan.md',
      ],
    },
  ],


  // 功能测试
  '/test/': [
    {
      text: '测试页',
      link: '/test/',
      // collapsible: true,
      children: [
        '/test/markdown.md',
        '/test/tips.md',
        '/test/code.md',
      ],
    },

    // SidebarItem
    // {
    //   text: 'Foo',
    //   link: '/foo/',
    //   children: [
    //     // SidebarItem
    //     {
    //       text: 'github',
    //       link: 'https://github.com',
    //       children: [],
    //     },
    //     {
    //       text: 'baidu',
    //       link: 'https://baidu.com',
    //       children: [],
    //     },
    //   ],
    // },
    // // 字符串 - 页面文件路径
    // '/bar/README.md',
  ],

}