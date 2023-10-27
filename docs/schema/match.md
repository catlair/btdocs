---
lang: zh-CN
title: 竞猜
description: 竞猜
---

<script setup lang="ts">
import { matchSchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="matchSchema" v-model="configs[id].match"></JSONSchema>

## 代码

```json-vue
{{configs[id].match}}
```
