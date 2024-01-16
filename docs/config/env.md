---
lang: zh-CN
title: 环境变量
description: 环境变量
---

## 环境变量文档

| 名字                       | 说明                                                                 | 备注                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TENCENT_SECRET_ID          | 使用 SCF 随机执行需要腾讯账号授权 ID                                 |                                                                                                                                                                  |
| TENCENT_SECRET_KEY         | 使用 SCF 随机执行需要腾讯账号授权 KEY                                |                                                                                                                                                                  |
| ALI_SECRET_ID              | 使用 FC 随机执行需要阿里账号授权 ID                                  |                                                                                                                                                                  |
| ALI_SECRET_KEY             | 使用 FC 随机执行需要阿里账号授权 KEY                                 |                                                                                                                                                                  |
| ~~USE_NETWORK_CODE~~       | 直接通过网络请求代码，无需手动更新（云函数）                         | 已废弃                                                                                                                                                           |
| BILIOUTILS_ASYNC           | 任意值有效，异步执行，在本地可以让多账号同时运行，而不是依次运行     |                                                                                                                                                                  |
| ~~BILITOOLS_IS_ASYNC~~     | 同 `BILIOUTILS_ASYNC`                                                | 即将废弃                                                                                                                                                         |
| SERVERLESS_PLATFORM_VENDOR | Serverless 供应商，本地推送时必须，Docker 默认为`tencent`            |                                                                                                                                                                  |
| BILITOOLS_CONFIG           | [Gzip 压缩](./index)后的单个用户配置，所有环境都可用                 |                                                                                                                                                                  |
| RUN_SCF_ALL                | 运行全部云函数（ Docker 推送至 SCF 时使用，值为需要`y`）             |                                                                                                                                                                  |
| ~~BILITOOLS_FILE_NAME~~    | 给配置文件命名，主要为了防止青龙面板的配置冲突                       |                                                                                                                                                                  |
| ~~SCF_MEMORY_SIZE~~        | scf 中运行的内存大小（默认 128M，范围为 64 以及 128 的 1-24 整数倍） |                                                                                                                                                                  |
| BILIOUTILS_LOG_DIR         | 日志目录                                                             |                                                                                                                                                                  |
| BILIOUTILS_DETACHED        | 是否后台运行，值为任意即后台运行                                     | 默认前台运行                                                                                                                                                     |
| BO_COOKIE                  | 通过环境变量配置 cookie                                              | 多个 cookie 使用 `&` 进行分割，该 cookie 将合并到文件配置或 `BILITOOLS_CONFIG` 配置中（注意顺序对应，需要跳过直接留空即可，例如`cookie1&&&cookie4`），此处优先。 |
