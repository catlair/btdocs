---
lang: zh-CN
title: 每日电池
description: 每日电池
---

<script setup lang="ts">
import { dailyBatterySchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="dailyBatterySchema" v-model="configs[id].dailyBattery"></JSONSchema>

## 代码

```json-vue
{{configs[id].dailyBattery}}
```
