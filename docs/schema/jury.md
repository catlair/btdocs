---
lang: zh-CN
title: 风纪委员
description: 风纪委员
---

<script setup lang="ts">
import { jurySchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="jurySchema" v-model="configs[id].jury"></JSONSchema>

## 代码

```json-vue
{{configs[id].jury}}
```
