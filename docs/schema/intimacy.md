---
lang: zh-CN
title: 粉丝亲密度
description: 粉丝亲密度
---

<script setup lang="ts">
import { intimacySchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="intimacySchema" v-model="configs[id].intimacy"></JSONSchema>

## 代码

```json-vue
{{configs[id].intimacy}}
```
