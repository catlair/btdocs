---
lang: zh-CN
title: 直播弹幕
description: 直播弹幕
---

<script setup lang="ts">
import { liveDmSchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="liveDmSchema" v-model="configs[id].liveDm"></JSONSchema>

## 代码

```json-vue
{{configs[id].liveDm}}
```
