---
lang: zh-CN
title: 大积分
description: 大积分
---

<script setup lang="ts">
import { bigPointSchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="bigPointSchema" v-model="configs[id].bigPoint"></JSONSchema>

## 代码

```json-vue
{{configs[id].bigPoint}}
```
