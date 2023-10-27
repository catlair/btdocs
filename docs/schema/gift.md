---
lang: zh-CN
title: 直播间礼物
description: 直播间礼物
---

<script setup lang="ts">
import { giftSchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="giftSchema" v-model="configs[id].gift"></JSONSchema>

## 代码

```json-vue
{{configs[id].gift}}
```
