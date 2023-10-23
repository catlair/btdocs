---
lang: zh-CN
title: 风纪委员
description: 风纪委员
---

<script setup lang="ts">
import { jurySchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="jurySchema" v-model="data.jury"></JSONSchema>

## 代码

```json-vue
{{data.jury}}
```
