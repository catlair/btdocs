---
lang: zh-CN
title: 历史配置对比
description: 历史配置对比
---

<script setup lang="ts">
import useConfigStore from '@store/config'
const store = useConfigStore()

</script>

## TODO

::: info
功能建设中，建议请直接回复到底部评论区
:::

- [ ] 简单实现
- [ ] 多账号
- [x] 保存页面状态
- [ ] UI 组件优化
- [ ] 导入已有配置

## 配置总览

```json-vue
{{store.config}}
```
