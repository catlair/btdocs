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

## 支持功能 <Badge v-if="isRefreshed" type="tip" :text="`版本${tagName}`" vertical="top" />

<!--@include: ../md/func.md-->

## 重要提示

::: danger
cookie 重要提示（关于频繁失效），除了账号本身可能存在的风险外（例如异地登录，大量的天选等），还可能是以下原因：

请务必查看 Cookie 的获取[点击这里跳转](../config/get_value.md)

由于 百度云函数 华为云函数 已经开始收费，且统计数据表明，使用人数较少，所以不再提供此类云函数部署，如有需要请自行编译。
:::

<!-- 不管你是否注意到，但是我很高兴的告诉，本项目不再开源，当然下载到的内容能够直接看到代码。开源与不开源无所谓，因为到闭源为止，通过 issue 和 pr 提供代码或文档帮助的一共只有 5 位， star 有 263 个。如果你还想再来到这里，记住 `btdocs.vercel.app` 才是一直不变的链接。 -->

::: tip
获取直播间 -412 错误，暂时不知道怎么解决。影响功能：liveLottery、liveRedPack。

通过半年实测，createCookieDay 配置确实有延长 cookie 时效的效果。
:::

## 使用说明

配置方式见顶部导航栏（移动端点左上角，上面部分是导航），点击配置[或者点击这里跳转](../config/)。

## 更新

[历史各版本配置对比](/config/version.md)

**预览**

- <Badge type="tip" text="新增" vertical="middle" /> 风纪委员无案件等待次数可配置。

**v0.23.805**

- <Badge type="danger" text="警告" vertical="middle" /> 部分云函数平台不再进行压缩包打包。
- <Badge type="danger" text="修复" vertical="middle" /> 部分系统下因为日志数据流导致程序直接崩溃。
- <Badge type="warning" text="修复" vertical="middle" /> 创建新 cookie 仅仅只有第一个配置生效。
- <Badge type="warning" text="修复" vertical="middle" /> 莫名其妙的 24 点。
- <Badge type="warning" text="修复" vertical="middle" /> 错误日志并没有输出 stack。
- <Badge type="warning" text="修复" vertical="middle" /> 获取稿件：“请求过于频繁，请稍后再试”。
- <Badge type="warning" text="修复" vertical="middle" /> 配置中解除投币 5 个限制的配置没作用。
- <Badge type="warning" text="修复" vertical="middle" /> 指定 up 主投币但还是会根据顺序给其他 up 主投币。
- <Badge type="tip" text="新增" vertical="middle" /> exchangeBigPoint 大积分兑换。
- <Badge type="tip" text="新增" vertical="middle" /> liveDm 可配置。
- <Badge type="tip" text="新增" vertical="middle" /> dailyBattery 旧版任务下线，新版任务替换（测试中，配置详见历史各版本配置对比）。
- <Badge type="tip" text="新增" vertical="middle" /> mangaTask 夏季活动，没有卵用，白嫖一个漫画装扮而已（只获取积分，需手动兑换）。
- <Badge type="tip" text="新增" vertical="middle" /> [app.http]配置项，解决部分 api 在不同版本下结果不同的问题。
- <Badge type="tip" text="新增" vertical="middle" /> 使用 renovate-bot 自动更新依赖。

链接跳转：

[更多日志点击访问详情](./update.md)

## QQ 群

~~如果需要反馈，尽量选择 issue，而不是进群。~~

扫码加入群，群不提供使用帮助，自行看文档，别问，问就拉黑（群号：759694670）：

![qq群](/images/qq_group.png)

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

- [SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
- [catlair/bili-task-puppeteer](https://github.com/catlair/bili-task-puppeteer)
- [lzghzr/TampermonkeyJS](https://github.com/lzghzr/TampermonkeyJS)
- [whyour/qinglong](https://github.com/whyour/qinglong)
- [RayWangQvQ/BiliBiliToolPro](https://github.com/RayWangQvQ/BiliBiliToolPro)
- [dd178/BILI_judgement](https://github.com/dd178/BILI_judgement)

同时感谢所有被依赖的开源项目，详见 package.json。包括没有依赖的 https://github.com/lodash

### 技术支持

- [吾爱破解](https://www.52pojie.cn/)
- [MDN](https://www.52pojie.cn//)

### 捐赠者

- 网友（春风肩上停）
- [JetBrains](https://www.jetbrains.com/zh-cn/community/opensource)
- [vtroisWhite](https://github.com/vtroisWhite)
- [wdssfff00](https://github.com/wdssfff00)
- 等等

### 项目所使用到的平台

- [vercel](https://vercel.com/) 为本项目提供静态网站托管服务（为支持国内访问，本人自费 2024666.xyz 域名）。
- [supabase](https://supabase.io/) 为本项目提供数据库服务。
- [js.org](https://js.org/) 为本项目提供域名服务，用于 Github pages 部署的备份文档。
- [github pages](https://pages.github.com/) 为本项目提供静态网站托管服务。
- [github actions](https://docs.github.com/zh/actions) 为本项目提供持续集成服务。
- [renovate](https://www.mend.io/renovate/) 为本项目提供依赖更新服务。
