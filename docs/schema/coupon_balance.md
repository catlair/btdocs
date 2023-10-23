---
lang: zh-CN
title: 使用 B 币券
description: 使用 B 币券
---

<script setup lang="ts">
import { couponBalanceSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="couponBalanceSchema" v-model="data.couponBalance"></JSONSchema>

## 代码

```json-vue
{{data.couponBalance}}
```
