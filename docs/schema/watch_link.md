---
lang: zh-CN
title: 直播心跳
description: 直播心跳
---

<script setup lang="ts">
import { watchLinkSchema } from './_schema'
import useConfigStore from '@store/config'
import { storeToRefs } from 'pinia';
const { configs, id } = storeToRefs(useConfigStore())

</script>

## 表单

<JSONSchema :schema="watchLinkSchema" v-model="configs[id].watchLink"></JSONSchema>

## 代码

```json-vue
{{configs[id].watchLink}}
```
