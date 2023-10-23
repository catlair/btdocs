---
lang: zh-CN
title: 竞猜
description: 竞猜
---

<script setup lang="ts">
import { matchSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="matchSchema" v-model="data.match"></JSONSchema>

## 代码

```json-vue
{{data.match}}
```
