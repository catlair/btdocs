---
lang: zh-CN
title: 大积分
description: 大积分
---

<script setup lang="ts">
import { bigPointSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="bigPointSchema" v-model="data.bigPoint"></JSONSchema>

## 代码

```json-vue
{{data.bigPoint}}
```
