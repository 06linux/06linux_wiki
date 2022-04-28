---
home: true
title: 首页
heroImage: /images/hero.png
heroText: 技术博客
tagline: 学而不思则罔，思而不学则殆！
description: 页面的描述

actions:
  - text: 我的文档
    link: /doc/
    type: primary
  - text: 工作日志
    link: /worklog/
    type: secondary
  - text: 每日一思
    link: /mind/
    type: secondary
  - text: 功能测试
    link: /test/
    type: secondary

features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。



footer: MIT Licensed | Copyright © 2021-present 06Linux
---

# Hello VuePress

我的 wiki 页面 :tada: 

发布测试。。。

## 测试页面
+ [测试](./test/README.md)
+ [测试1](./test/test1.md)
+ [测试2](./test/test2.md)

## 您好
+ 您好，我的第一个页面，后面会慢慢增加


## 感谢
+ 特别感谢 vuepress


## 🚀 A Quick Start

First of all, you need to install VuePress Theme Mix in your VuePress 2 project by running:

```sh:no-line-numbers
yarn add -D vuepress-theme-mix@latest
```

And then setting the theme in `docs/.vuepress/config.ts` file:

```ts{9}:no-line-numbers
// docs/.vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import type { MixThemeConfig } from 'vuepress-theme-mix/lib/node'

export default defineUserConfig<MixThemeConfig>({
  // ……

  // Theme Config
  theme: 'vuepress-theme-mix',

  // ……
})
```

Finally, you are ready to create content as described in the documentation. :beers: