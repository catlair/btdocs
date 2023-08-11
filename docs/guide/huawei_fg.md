---
lang: zh-CN
title: 华为云函数 FG
description: 华为云函数 FG
---

## 价格调整说明

![huawei-fg-shoufei.png](/images/huawei-fg-shoufei.png)

理论上本项目暂不涉及上述收费服务，关注后续价格调整

## 华为云函数 FG 文档 <TestedVersion type="fg" />

下载最新版的 [tencent_scf.zip 压缩包](https://github.com/catlair/BiliOutils/releases/latest)

<!-- 加速下载：
<MyLink :href="downloadUrl"></MyLink> -->

<!-- 把 {{tagName}} 替换成最新版本号即可 -->

<!-- 文件下载的 baidu_cfc.zip，但是配置方式除了百度的，也可以参考 SCF 的创建 config.json -->

## 新增 FG

<https://console.huaweicloud.com/functiongraph>

基本配置

![fg-create](/images/fg-create.png)

设置超时时间。（超时时间按需，别什么都问我）

![fg-timeout](/images/fg-timeout.png)

创建触发器

![fg-trigger](/images/fg-trigger.png)

## 上传代码

怎么上传 tencent_scf.zip 别问我，看页面提示，我不是 10086，要服务请付费。

## 运行

运行个 JB，傻逼华为，卡死你爹，这就傻逼网页还想要用户，要尼玛么

<!-- <script setup>
import { storeToRefs } from 'pinia';
import { useReleasesStore } from '@stores/releases';

const { tagName } = storeToRefs(useReleasesStore());
const ghproxy = __GLOBAL_GHPROXY__
const downloadUrl = `https://${ghproxy}/https://github.com/catlair/BiliOutils/releases/download/${tagName.value}/baidu_cfc.zip`
</script> -->
