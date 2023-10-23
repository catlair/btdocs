---
lang: zh-CN
title: 大积分兑换
description: 大积分兑换
---

<script setup lang="ts">
import { exchangeBigPointSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="exchangeBigPointSchema" v-model="data.exchangeBigPoint"></JSONSchema>

## 代码

```json-vue
{{data.exchangeBigPoint}}
```
