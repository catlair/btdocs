---
lang: zh-CN
title: 天选时刻
description: 天选时刻
---

<script setup lang="ts">
import { lotterySchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="lotterySchema" v-model="configs[id].lottery"></JSONSchema>

## 代码

```json-vue
{{configs[id].lottery}}
```
