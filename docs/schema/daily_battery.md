---
lang: zh-CN
title: 每日电池
description: 每日电池
---

<script setup lang="ts">
import { dailyBatterySchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="dailyBatterySchema" v-model="data.dailyBattery"></JSONSchema>

## 代码

```json-vue
{{data.dailyBattery}}
```
