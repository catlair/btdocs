---
lang: zh-CN
title: 粉丝亲密度
description: 粉丝亲密度
---

<script setup lang="ts">
import { intimacySchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="intimacySchema" v-model="data.intimacy"></JSONSchema>

## 代码

```json-vue
{{data.intimacy}}
```
