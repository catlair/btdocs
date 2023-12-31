---
lang: zh-CN
title: 华为 AGC 云函数
description: 华为 AGC 云函数
---

## 华为 AGC 云函数文档 <TestedVersion type="agc" />

下载最新版的 [tencent_scf.zip 压缩包](https://github.com/catlair/BiliOutils/releases/latest)

解压压缩包（当然如果你使用 winrar 等软件直接编辑压缩包更好）

编辑 index.js 文件。将代码修改如下：

::: details index.js
<<< ./agc_index.js
:::

重新压缩为 zip 压缩包，用于上传到 AGC

<!-- 加速下载：
<MyLink :href="downloadUrl"></MyLink> -->

<!-- 把 {{ tagName }} 替换成最新版本号即可 -->

## 2. 新增 AGC CF

[点击进入 AGC](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)

先创建一个项目，打开项目后开通云函数

![agc-create-fc](/images/agc-create-fc.png)

开通云函数后创建新的云函数，注意选择地域，后面不能改

![地域agc-create-map](/images/agc-create-map.png)

### 基础配置

- 运行环境选择最新的 `Nodejs`（最低请选择 14）

![AGC基础配置](/images/agc-base-config.png)

创建好后修改基本信息

![AGC基础配置2](/images/agc-base-info.png)

### 触发器配置

此处使用 CRON 表达式是 UTC 时间，本地时间需要小时减 8

![fc-create-trigger](/images/agc-trigger.png)

记得开启触发器

![fc-create-trigger](/images/agc-trigger-open.png)

<!-- <script setup>
import { storeToRefs } from 'pinia';
import { useReleasesStore } from '@stores/releases';

const { tagName } = storeToRefs(useReleasesStore());
const ghproxy = __GLOBAL_GHPROXY__
const downloadUrl = `https://${ghproxy}/https://github.com/catlair/BiliOutils/releases/download/${tagName.value}/huawei_agc.zip`
</script> -->
