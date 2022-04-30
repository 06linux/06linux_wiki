import { SidebarConfig } from "vuepress";

// 右侧菜单：
// 不同子路径下的页面会使用不同的侧边栏
export const sidebar: SidebarConfig = {

  // 技术文档
  '/doc/': [
    {
      text: 'Node',
      link: '/doc/node/',
      // collapsible: true,
      children: [
        '/doc/node/base.md',
        '/doc/node/ref.md',
      ],
    },
    {
      text: 'JavaScript',
      link: '/doc/javascript/',
      // collapsible: true,
      children: [
        '/doc/javascript/base.md',
        '/doc/javascript/ref.md',
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
        '/zy/经络运行图.md',
        '/zy/针灸大成.md',
        '/zy/神农本草.md',
        '/zy/皇帝内经.md',
        '/zy/伤寒论.md',
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