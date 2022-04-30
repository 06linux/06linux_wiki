import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { docsearchPlugin } from'@vuepress/plugin-docsearch'
import { sidebar } from './sidebar'
import { navbar } from './navbar'

// const baseUrlOnServer = '/06linux_wiki/';   // 正式环境路径
// const base = process.env.NODE_ENV == 'development'? '/': baseUrlOnServer;

// 备注：绑定域名，就不用设置 base 路径
const base = '/';

export default defineUserConfig<DefaultThemeOptions>({
  base: base,
  lang: 'zh-CN',
  title: '06Linux',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  description: '06Linux 的个人网站，技术分享 vue react javascript typescript python 等等',

  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'https://github.com/06linux/06linux_wiki',

    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '时间',
    contributors: true,
    contributorsText: "作者",
    backToHome: "返回首页",
    navbar: navbar,
    sidebar: sidebar,

  }),

  plugins: [

    // 配置数据，需要从 https://docsearch.algolia.com/apply/ 申请
    docsearchPlugin({
      appId:'xxxx',
      apiKey: 'xxxx',
      indexName: '06linux.com'
    }),
   
  ],
})