---
lang: zh-CN
title: 天选红包
description: 天选红包
---

<script setup lang="ts">
import { redPackSchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="redPackSchema" v-model="configs[id].redPack"></JSONSchema>

## 代码

```json-vue
{{configs[id].redPack}}
```
