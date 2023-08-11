---
lang: zh-CN
title: 配置和 npm 使用案例
description: 配置和 npm 使用案例
---

## 前言

为了各位负基础的同学能够更好的使用本项目，我们将在这里提供一些配置案例和 npm 使用案例。

欢迎各位同学通过 点击文档最后的在 Github 上编辑此页提供更多的案例，我们会将你的案例放在这里。

## 配置案例

### 配置关闭某个功能

::: details 关闭 addCoins 功能

```json5
{
  functions: {
    addCoins: false,
  },
}
```

:::

### 配置开启某个功能

::: details 开启 mangaTask 功能

```json5
{
  // prettier-ignore
  functions: { 
    addCoins: false,
    // 。。。等等无关 mangaTask 的配置

    // 开启 mangaTask 功能
    mangaTask: true, // [!code focus]
  },
  // 漫画的具体配置，function 中 mangaTask 为 true 时才会生效
  // prettier-ignore
  manga: { // [!code focus]
    // 签到
    sign: true,
    // 购买漫画
    buy: false,
    // 购买漫画 id（优先级高）
    mc: [],
    // 购买漫画名称（优先级中）
    name: [],
    // 购买追漫（优先级低）
    love: true,
  }, // [!code focus]
}
```

:::

### 配置 6 级后依然投币

::: details 配置 6 级后依然投币

```json5
{
  functions: {
    addCoins: true,
  },
  limit: {
    // 获取经验限制为 6 级
    level6: false, // [!code focus]
  },
}
```

:::

### 公共配置

当我有很多个用户，但是用户需要共享一些配置，比如说 pushplusToken 推送时。

::: details 公共配置

```json5
[
  {
    // 用户 1
  },
  {
    // 用户 2
  },
  {
    // 声明这个配置不是哪个用户的，而是公共的
    __common__: true, // [!code focus]
    message: {
      // push+
      pushplusToken: '', // [!code focus]
    },
  },
]
```

> 当具体用户配置中没有配置 pushplusToken 时，就会使用公共配置中的 pushplusToken。

> 如果用户配置中有 pushplusToken，就会使用用户配置中的 pushplusToken。

:::

## npm 案例

### 自定义任务

以依次执行登录任务和投币任务为例

::: details 自定义任务

```bash
bilioutils -c ./config.json -t loginTask,addCoins
```

:::

### 运行多账号中的某些账号

假设我配置中有 6 个账号，我只想运行其中第 1 个和第 3 个账号

::: details 运行多账号中的某些账号

```bash
bilioutils -c ./config.json -i 1,3
```

:::
