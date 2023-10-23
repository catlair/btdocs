---
lang: zh-CN
title: 投币
description: 投币
---

<script setup lang="ts">
import { coinSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="coinSchema" v-model="data.coin"></JSONSchema>

## 代码

```json-vue
{{data.coin}}
```
