---
lang: zh-CN
title: 介绍
editLink: true
description: 简单介绍
---

::: tip 参与贡献
如果对与此文档有补充、改进意见或者修改，每个页面都可以直接点击末尾的`在 GitHub 上编辑此页`。

如果喜欢请为 <https://github.com/catlair/BiliOutils> 点个 star，关注才能不迷路。
:::

## 支持功能

<!-- <Badge v-if="isRefreshed" type="tip" :text="`版本${tagName}`" vertical="top" /> -->

[点击跳转](/schema/function)

<!--@include: ../md/func.md-->

## 重要提示

::: danger
cookie 重要提示（关于频繁失效），除了账号本身可能存在的风险外（例如异地登录，大量的天选等），还可能是以下原因：

请务必查看 Cookie 的获取[点击这里跳转](../config/get_value.md)
:::

<!-- 不管你是否注意到，但是我很高兴的告诉，本项目不再开源，当然下载到的内容能够直接看到代码。开源与不开源无所谓，因为到闭源为止，通过 issue 和 pr 提供代码或文档帮助的一共只有 5 位， star 有 263 个。如果你还想再来到这里，记住 `btdocs.vercel.app` 才是一直不变的链接。 -->

## 使用说明

配置方式见顶部导航栏（移动端点左上角，上面部分是导航），点击配置[或者点击这里跳转](../config/)。

## 更新

[历史各版本配置对比](/config/version.md)

**预览**

- <Badge type="tip" text="新增" vertical="middle" /> addExp 大会员领取 10 经验，默认开启。

**v0.23.901**

- <Badge type="tip" text="新增" vertical="middle" /> 风纪委员无案件等待次数可配置。
- <Badge type="tip" text="新增" vertical="middle" /> npm cli 增加 --log-dir 参数，用于指定日志目录。
- <Badge type="tip" text="新增" vertical="middle" /> npm cli 增加 --async 参数，用于同时执行多账号，而非依次执行（功能早已实现，使用环境变量配置，现添加命令行参数指定）。
- <Badge type="tip" text="新增" vertical="middle" /> npm cli 增加 --detached 参数，用于将子进程脱离主进程，避免需要后台运行时出现弹窗。（前期其实是默认的，但是这会导致 windows 下无日志输出，所有增加此配置）
- <Badge type="tip" text="新增" vertical="middle" /> 风纪委员无案件等待次数可配置。
- <Badge type="tip" text="优化" vertical="middle" /> 漫读券兑换，startHour 类型修改为数组。
- <Badge type="tip" text="优化" vertical="middle" /> 每日电池等待间隔过小。

链接跳转：

[更多日志点击访问详情](./update.md)

## QQ 群

~~如果需要反馈，尽量选择 issue，而不是进群。~~

扫码加入群，群不提供使用帮助，自行看文档，别问，问就拉黑（群号：759694670）：

<n-image src="/images/qq_group.png" alt="qq群" :class="zzClass"/>

## 支持

<SponsorShip></SponsorShip>

<script setup>
  import SponsorShip from '@components/SponsorShip.vue'
</script>

## 致谢

<!-- ### 开发支持（~~暗杀名单~~）

提供 PR、代码 Issue 或者较为完整的逻辑建议。

- [vtroisWhite](https://github.com/vtroisWhite)
- [wdssfff00](https://github.com/wdssfff00)
- [iiwenwen](https://github.com/iiwenwen)
- [HowerL](https://github.com/HowerL) -->

### 参考项目

GitHub 上的开源项目：

- [SocialSisterYi/bilibili-API-collect - 参考 API 文档](https://github.com/SocialSisterYi/bilibili-API-collect)
- [catlair/bili-task-puppeteer - （已归档）](https://github.com/catlair/bili-task-puppeteer)
- [lzghzr/TampermonkeyJS - 直播心跳参考](https://github.com/lzghzr/TampermonkeyJS)
- [whyour/qinglong - 推送参考](https://github.com/whyour/qinglong)
- [RayWangQvQ/BiliBiliToolPro - 梦开始的地方](https://github.com/RayWangQvQ/BiliBiliToolPro)
- [dd178/BILI_judgement - 风纪委员 API 参考](https://github.com/dd178/BILI_judgement)

同时感谢所有被依赖的开源项目，详见 package.json。包括没有依赖的 https://github.com/lodash

### 技术支持

- [MDN](https://developer.mozilla.org/zh-CN/)

### 捐赠者

- 网友（春风肩上停）
- [JetBrains](https://www.jetbrains.com/zh-cn/community/opensource)
- [vtroisWhite](https://github.com/vtroisWhite)
- [wdssfff00](https://github.com/wdssfff00)
- 等等

### 项目所使用到的平台

感谢以下平台为本项目提供服务（主要是教给有缘人白嫖技巧）：

- [VS Code](https://code.visualstudio.com/) 宇宙第一慢编辑器（
- [JetBrains](https://www.jetbrains.com/) 宇宙第一卡集成开发环境（
- [FiraCode](https://github.com/tonsky/FiraCode) 推荐的编程字体。
- [vercel](https://vercel.com/) 为本项目提供静态网站托管服务。
- [supabase](https://supabase.io/) 为本项目提供数据库服务。
- [mongodb](https://www.mongodb.com/) 为本项目提供数据库服务。
- [js.org](https://js.org/) 为本项目提供域名服务，用于 Github pages 部署的备份文档。
- [js.cool](https://js.cool/) 为本项目提供域名服务，用于 Vercel 部署的主要文档。
- [github pages](https://pages.github.com/) 为本项目提供静态网站托管服务。
- [github actions](https://docs.github.com/zh/actions) 为本项目提供持续集成服务。
- [renovate](https://www.mend.io/renovate/) 为本项目提供依赖更新服务。
- [bilibili](https://www.bilibili.com/) 为本项目提供在线视频服务。
- [twikoo](https://twikoo.js.org/) 一个简洁、安全、免费的静态网站评论系统。
- [vitepress](https://vitepress.dev/) Simple, powerful, and fast. Meet the modern SSG framework you've always wanted.

### 项目所使用的语言

- [JavaScript](https://github.com/tc39/proposals) 这就是一坨屎。
- [TypeScript](https://github.com/tc39/proposals) 给屎加了点塘。
- [Go](https://go.dev/) Life is short, let is Go.
- [Rust](https://www.rust-lang.org/) 编程届的原神。
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) 全宇宙应用最广泛的样式表语言。
- [HTML](https://html.spec.whatwg.org/multipage/) 不知道怎么描述。
- [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) 这玩意儿有官网？
