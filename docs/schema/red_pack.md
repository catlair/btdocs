---
lang: zh-CN
title: 天选红包
description: 天选红包
---

<script setup lang="ts">
import { redPackSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="redPackSchema" v-model="data.redPack"></JSONSchema>

## 代码

```json-vue
{{data.redPack}}
```
