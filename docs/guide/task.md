---
lang: zh-CN
title: 自定义任务
description: 自定义任务
---

## 前言

其实每个平台的指南上面都有，这里就不赘述了，简单概括一下

注意很多任务（特别是需要判断大会员状态的任务）需要先执行 `loginTask` 任务。

目前只有只能使用自定义的任务

- `exchangeBigPoint` 大积分兑换
- `exchangeCoupon` 兑换漫读券

PS：下面不管什么方式，请把 task1 换成你想要的好吗，别问我 task1 为啥不行，我怎么知道 task1 是啥。

## npm 方式

```bash
bilioutils -c ./config.json -t task1,task2

```

举例：

```bash
bilioutils -c ./config.json -t loginTask
```

cli 参数格式如下：

```txt
-t, --task <task>            执行指定的 task，使用英文逗号（,）分隔
```

## 云函数方式

在云函数触发器的附加信息中添加如下内容（json 或 json5）

```json5
{ task: 'task1,task2,task3' }
```

举例：

```json5
{ task: 'loginTask' }
```

task 为需要执行的任务，使用英文逗号（,）分隔

## 青龙面板

`--task` 或者 `-t` 执行指定的 task，使用英文逗号（,）分隔。
