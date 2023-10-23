---
lang: zh-CN
title: 直播弹幕
description: 直播弹幕
---

<script setup lang="ts">
import { liveDmSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="liveDmSchema" v-model="data.liveDm"></JSONSchema>

## 代码

```json-vue
{{data.liveDm}}
```
