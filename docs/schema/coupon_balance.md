---
lang: zh-CN
title: 使用 B 币券
description: 使用 B 币券
---

<script setup lang="ts">
import { couponBalanceSchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="couponBalanceSchema" v-model="configs[id].couponBalance"></JSONSchema>

## 代码

```json-vue
{{configs[id].couponBalance}}
```
