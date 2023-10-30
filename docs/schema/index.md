---
lang: zh-CN
title: 历史配置对比
description: 历史配置对比
---

<script setup lang="ts">
import useConfigStore from '@store/config'
const store = useConfigStore()

function btnClick() {
  console.log(window.localStorage.removeItem('config'))
}
</script>

::: tip
页面未完成，配置文档右转 [配置文档](/config/)
:::

## 宛如戏台上的老将军，背上插满了 flag

::: tip
在功能建设的道路上，你若有什么建议，请直接在底部评论区砸砖！

虽然本项目目前还没有文档贡献者，但又如诗云：「登上那座南山，采摘蕨菜；没有见到君子，就会憔悴不堪。」

最终，我们将以更轻松愉快的方式去替换现有的表格模式文档介绍，降低使用难度。所以，一起加入这个“地狱”，让我们一起让这个项目变得更美好！
:::

下面是 todo list，flag 立得像戏台上的老将军，但是谁说一定会做呢。

- [ ] 简单实现，什么，还不能用？那你说个 der
- [x] 多账号，也不是很难嘛
- [x] 保存页面状态，一个插件而已
- [ ] 保存状态到 indexDB，实现撤回功能。
- [ ] UI 组件优化，你会 CSS？
- [ ] 导入已有配置
- [ ] 简化导出配置，大家磁盘都是花钱买的
- [x] 主键支持主题，支持了，但又没支持
- [ ] @lljj/vue3-form-naive 暗黑下的奇怪配色
- [ ] 配置项描述迁移

## 开发选项

<n-button @click="btnClick">重置缓存</n-button>

## 配置总览

```json-vue
{{store.config}}
```
