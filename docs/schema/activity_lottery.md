---
lang: zh-CN
title: 转盘抽奖
description: 转盘抽奖
---

<script setup lang="ts">
import { activityLotterySchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="activityLotterySchema" v-model="data.activityLottery"></JSONSchema>

## 代码

```json-vue
{{data.activityLottery}}
```
