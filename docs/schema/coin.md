---
lang: zh-CN
title: 投币
description: 投币
---

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { coinSchema } from './_schema'
import useConfigStore from '@store/config'
const { configs, id } = storeToRefs(useConfigStore())
</script>

## 账户管理



## 表单

<JSONSchema :schema="coinSchema" v-model="configs[id].coin"></JSONSchema>

## 代码

```json-vue
{{configs[id].coin}}
```
