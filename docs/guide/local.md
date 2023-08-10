---
lang: zh-CN
title: 本地直接运行
description: 本地直接运行
---

## 本地直接运行文档

Node.js 首先需要本地的运行环境：

- [下载 Node.js 长期维护版](https://nodejs.org/zh-cn/)
- [安装到系统](https://www.runoob.com/nodejs/nodejs-install-setup.html)

::: tip 提示
如果已经安装了 node14 及以上可以跳过此步骤。
:::

## 1. npm 包 <Badge type="tip" text="推荐" vertical="top" /> <TestedVersion type="npm" />

在 cmd 或者 terminal 中运行以下命令

```bash
# 安装
npm install -g bilioutils
# 查看帮助
bilioutils -h
# 指定配置路径运行
bilioutils -c ./config.json
# 指定任务
biloutils --task=loginTask,task1,task2
# 扫码登录
bilioutils --login
```

注意：当 npm 下载缓慢时可以换源，详情百度。也可以 `npm install -g nru` 安装 nru，然后 `nru u taobao` 选择淘宝源，需要 npm 源的时候 `nru u npm` 选择 npm 源。

更新代码：

```bash
npm install -g bilioutils
```

帮助详情：

```bash
Usage: bilioutils [options]

BiliOutils 哔哩哔哩自动化工具箱

Options:
  -v, --version                输出版本号
  -c, --config <path>          配置文件路径
  -i, --item <item>            多用户配置执行指定的配置，下标 1 开始（倒数 -1 开始），使用英文逗号（,）分隔
  -cck, --createCookie <path>  输出新的 cookie 到控制台
  -o, --once                   每日任务只执行一次 (default: false)
  -t, --task <task>            执行指定的 task，使用英文逗号（,）分隔
  --cron <cron>                cron 表达式
  --delay <time1[-time2]>      不带单位是延迟 time 分钟后执行，单位可以为 ms（毫秒）、s（秒）、m（分）、h（小时）
  -l, --login                  扫码登录，可以配合 --config 使用
  -h, --help                   输出帮助信息
```

注意：很多任务（特别是需要判断大会员状态的任务）需要先执行 `loginTask` 任务。

讨论：<https://github.com/catlair/BiliOutils/issues/90#issuecomment-1190364619>

## windows 下定时运行

linux 推荐用 crontab 来定时运行，windows 下也可以使用系统任务。

将快捷方式移动到开机启动项

```bash
%systemdrive%%homepath%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
```

## 参考视频

windows 下的定时运行方式，可以参考这个视频：

<BilibiliVideo bv="BV1Na411W7nk"/>

<script setup>
// const ghproxy = __GLOBAL_GHPROXY__
const tagName = 'v0.0.2'
// const downloadUrl = `https://${ghproxy}/https://github.com/catlair/cron/releases/download/${tagName}/cron_windows_amd64.tar.gz`
</script>

## 配置文件

<!--@include: ../md/config_path.md-->
