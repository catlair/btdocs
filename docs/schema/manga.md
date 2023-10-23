---
lang: zh-CN
title: 漫画任务
description: 漫画任务
---

<script setup lang="ts">
import { mangaSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="mangaSchema" v-model="data.manga"></JSONSchema>

## 代码

```json-vue
{{data.manga}}
```
