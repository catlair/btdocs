---
lang: zh-CN
title: 取关分组
description: 取关分组
---

<script setup lang="ts">
import { unFollowSchema } from './_schema'
import useConfigStore from '@store/config'
const data = useConfigStore()

</script>

## 表单

<JSONSchema :schema="unFollowSchema" v-model="data.unFollow"></JSONSchema>

## 代码

```json-vue
{{data.unFollow}}
```
