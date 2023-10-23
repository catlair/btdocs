---
lang: zh-CN
title: 兑换漫读券
description: 兑换漫读券
---

<script setup lang="ts">
import { exchangeCouponSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="exchangeCouponSchema" v-model="data.exchangeCoupon"></JSONSchema>

## 代码

```json-vue
{{data.exchangeCoupon}}
```
