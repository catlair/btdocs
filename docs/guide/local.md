---
lang: zh-CN
title: 本地直接运行
description: 本地直接运行
---

## 本地直接运行文档

Node.js 首先需要本地的运行环境：

- [下载 Node.js 长期维护版（官网）](https://nodejs.org/)
- [下载 Node.js（阿里镜像）](https://registry.npmmirror.com/-/binary/node/latest-iron/)
- [下载 Node.js（大学源联合镜像）](https://mirrors.cernet.edu.cn/nodejs-release/latest)（[相关帮助](https://help.mirrors.cernet.edu.cn/nodejs-release)）
- [下载 Win 64 位最新 LTS（阿里镜像）](https://registry.npmmirror.com/-/binary/node/latest-iron/node-v20.10.0-x64.msi)
- [安装到系统教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)

::: tip 提示
如果已经安装了 node14 及以上可以跳过此步骤。
:::

## npm 包 <Badge type="tip" text="推荐" vertical="top" /> <TestedVersion type="npm" />

### 安装

::: tip

注意：当 npm 下载缓慢时可以换源，详情百度。也可以 `npm install -g nru` 安装 nru，然后 `nru u taobao` 选择淘宝源，需要 npm 源的时候 `nru u npm` 选择 npm 源。

如果需要了解哪个源更快，使用 `nru test` 测试一下。
:::

在 cmd 或者 terminal 中运行以下命令

```bash
# 安装
npm install -g bilioutils
# 查看帮助
bilioutils -h
# 指定配置路径运行
bilioutils -c ./config.json
# 指定任务
# 请把 task1 换成你想要的好吗，别问我 task1 为啥不行，我怎么知道 task1 是啥。
biloutils --task=task1,task2
# 扫码登录
bilioutils --login
```

::: info

指定版本安装：

```bash
  npm install -g bilioutils@0.23.814
```

:::

### 更新

```bash
npm install -g bilioutils
```

### 帮助详情

::: info
可能未及时更新，最新的直接 `bilioutils -h` 获取
:::

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

::: info
linux 推荐用 crontab 来定时运行，windows 下也可以使用系统任务。

本运行方式是在上面的 npm 包的基础上，使用系统任务来定时运行，请确认之前的步骤已经完成，且能够正常运行。
:::

### 计划任务

打开任务计划程序：

快捷键 `win + r`，在运行中输入 `taskschd.msc` 回车即可打开任务计划程序。

在 powershell 中输入 `taskschd.msc` 也可以打开任务计划程序。

![win_base.png](/images/win_base.png)

![win_trigger](/images/win_trigger.png)

![win_run_taskschd](/images/win_run.png)

这里的命令是 `bilioutils`。

参数是 `-c E:\github\bilitools\config.json5 -ld E:\github\bilitools` 注意更改路径哦，别问我路径怎么写，我也不知道。并且你能确保你的命令能够在 cmd 或者 powershell 中直接运行成功。

起始于，如果你知道是啥最好写上，不知道那就别乱填写。

![win_likerun](/images/win_likerun.png)

配置好后可以点击运行测试一下，由于没有弹窗，看日志文件是否有输出。

<!-- 将快捷方式移动到开机启动项

```bash
%systemdrive%%homepath%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
``` -->

## 参考视频

windows 下的定时运行方式，可以参考这个视频：

注意：视频有时效性，与文档有出入处请以文档为准。

<BilibiliVideo bv="BV1oF411y71V"/>

待补充，欢迎 PR

<script setup>
// const ghproxy = __GLOBAL_GHPROXY__
const tagName = 'v0.0.2'
// const downloadUrl = `https://${ghproxy}/https://github.com/catlair/cron/releases/download/${tagName}/cron_windows_amd64.tar.gz`
</script>

## 配置文件

<!--@include: ../md/config_path.md-->
