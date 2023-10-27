---
lang: zh-CN
title: 转盘抽奖
description: 转盘抽奖
---

<script setup lang="ts">
import { activityLotterySchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())
</script>

## 表单

<JSONSchema :schema="activityLotterySchema" v-model="configs[id].activityLottery"></JSONSchema>

## 代码

```json-vue
{{configs[id].activityLottery}}
```
