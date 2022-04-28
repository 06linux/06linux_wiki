import { defineUserConfig } from 'vuepress'

// const baseUrlOnServer = '/06linux_wiki/';   // 正式环境路径
// const base = process.env.NODE_ENV == 'development'? '/': baseUrlOnServer;

// 备注：绑定域名，就不用设置 base 路径
const base = '/';

export default defineUserConfig({
  base: base,
  lang: 'zh-CN',
  title: '06Linux 站点',
  description: '这是我的第一个 VuePress 站点',
})