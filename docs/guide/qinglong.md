---
lang: zh-CN
title: 青龙面板运行
description: 青龙面板运行
---

## 青龙面板文档 <TestedVersion type="ql" />

::: danger 注意
测试使用 v2.13.8 版本，最新版都 2.16.x，别惦记你那 2.11.x 版本了，更新吧。

已知低版本无法正确安装依赖，或者安装依赖后提示 `require(...).ql is not a function` 。该错误与 bilioutils 无关，与 node，npm 无关，请考虑升级青龙面板。

依赖一直在安装中可能是仓库源地址的问题，请尝试使用代理或直接在青龙面板的终端中执行[手动安装依赖](#手动安装依赖)。（此处未青龙面包使用问题吗，本人不提供相关文档帮助，如有需要请考虑寻找青龙面板相关文档。）

如果确实什么不得已的原因，无法升级青龙面板，可以考虑手动安装依赖，然后在尝试运行。
:::

- 默认配置文件名 `cat_bili_config.json`，或 `.json5`
- 配置文件名也可以通过环境变量 `BILITOOLS_FILE_NAME` 指定，后缀 `.json` 可以省略
- 由于作者并不熟悉，建议直接看青龙面板教程 <https://github.com/whyour/qinglong>

## 使用 npm 包

安装 Node 依赖（侧边栏中依赖管理）

```txt
bilioutils
```

::: tip
依赖一直在安装中可能是仓库源地址的问题，[手动安装依赖](#手动安装依赖)。
:::

然后拉取青龙面板运行的代码

::: code-group

```bash [Gitee]
ql raw https://gitee.com/catlair/BiliOutils/raw/main/tools/bilitools_npm.js
```

```bash [Github]
ql raw https://raw.githubusercontent.com/catlair/BiliOutils/main/tools/bilitools_npm.js
```

```js [手动]
// 手动创建一个 `bilitools_npm.js` 文件，并且把下面的代码拷贝进去

require('bilioutils').ql();

// 然后手动创建一个任务， `task bilitools_npm.js`
```

:::

创建一个配置文件
`cat_bili_config.json` 配置与其他相同

![ql_config](/images/ql_config.png)

或者使用环境变量

![环境变量](https://user-images.githubusercontent.com/81743795/148545529-73c95e3d-219f-4bf9-b266-7ad03bd9e9be.png)

## 更新 npm 包

自动更新如下所示：

![ql_update](/images/ql_update.png)

```bash
pnpm remove -g bilioutils && pnpm add -g bilioutils
```

PS: 可以不执行 `pnpm remove -g bilioutils`，不过前一个版本就会一直保留在磁盘中。

## 更新 cookie

添加 node 依赖 `@catlair/blogin`

然后拉取青龙面板运行的代码

::: code-group

```bash [Gitee]
ql raw https://gitee.com/catlair/BiliOutils/raw/main/tools/bilitools_login.js
```

```bash [Github]
ql raw https://raw.githubusercontent.com/catlair/BiliOutils/main/tools/bilitools_login.js
```

```js [手动]
// 手动创建一个 `任意名称.js` 文件，并且把下面面的代码拷贝进去

require('bilioutils').sacnLogin();

// 然后手动创建一个任务， `task 任意名称.js`

// 再使用手机扫码，如果 mid 存在于配置文件中，会自动更新，否则获取到的 cookie 会打印到控制台，以及 log 文件，请自行复制到配置文件中。

// 之后可以选择禁用任务，不要它自动运行。
```

:::

## 参考视频

<BilibiliVideo bv="BV1fB4y1i7hL" />

## 配置文件

注意：青龙不是 `config.json`, 而是 `cat_bili_config.json`。（共用文档，懒得改了）

<!--@include: ../md/config_path.md-->

## npm 参数

讨论：<https://github.com/catlair/BiliOutils/issues/90#issuecomment-1190364619>

由于青龙面板也是通过 npm 运行的，所以理所应当的能够使用 npm 参数。

`--config` 或者 `-c` 自定义配置文件的路径，可以是绝对路径，或者相对路径。

`--item` 或者 `-i` 多用户配置执行指定的配置，下标 1 开始（倒数 -1 开始），使用英文逗号（,）分隔。逻辑错误：如果你的配置中有错误配置或者空缺是不计算在内的，所以配置就好好的配置。

`--task` 或者 `-t` 执行指定的 task，使用英文逗号（,）分隔。注意很多任务（特别是需要判断大会员状态的任务）需要先执行 `loginTask` 任务。

`--delay` 运行任务前休眠多少时间（模仿随机运行），值有两种写法，第一种是 `10m-1h` 在 10 分钟和 1 小时直接随机，第二种是 `1h`，在 0 到 1h 之间随机。关于单位：不带单位是（m）分钟，单位可以为 ms（毫秒）、s（秒）、m（分）、h（小时）。

## 手动安装依赖

```bash
cd /ql/scripts
pnpm config set registry https://registry.npmmirror.com/
pnpm install
pnpm add bilioutils
```
