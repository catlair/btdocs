---
lang: zh-CN
title: 直播间礼物
description: 直播间礼物
---

<script setup lang="ts">
import { giftSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="giftSchema" v-model="data.gift"></JSONSchema>

## 代码

```json-vue
{{data.gift}}
```
