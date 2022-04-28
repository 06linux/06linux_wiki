import { defineUserConfig } from 'vuepress'
const { defaultTheme } = require('@vuepress/theme-default')


// const baseUrlOnServer = '/06linux_wiki/';   // 正式环境路径
// const base = process.env.NODE_ENV == 'development'? '/': baseUrlOnServer;

// 备注：绑定域名，就不用设置 base 路径
const base = '/';

export default defineUserConfig({
  base: base,
  lang: 'zh-CN',
  title: '06Linux',
  description: '06linux 的个人 wiki，欢迎光临',

  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'https://github.com/06linux/06linux_wiki',


    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/': [
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
      '/test/': [
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
    },





    navbar: [
      // NavbarItem
      {
        text: '测试',
        link: '/test/',
      },
      // NavbarGroup
      {
        text: '功能测试',
        children: ['/test/test1.md', '/test/test2.md'],
      },
      {
        text: '关于',
        link: '/about.md',
      },
    ],
  }),
})