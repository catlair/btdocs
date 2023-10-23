---
lang: zh-CN
title: 投币
description: 投币
---

<script setup lang="ts">
import useConfigStore from '@store/config'
const data = useConfigStore()

const couponBalanceSchema = {}

</script>

## 表单

<JSONSchema :schema="couponBalanceSchema" v-model="data.couponBalance"></JSONSchema>

## 代码

```json-vue
{{data.couponBalance}}
```
