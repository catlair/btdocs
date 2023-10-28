---
lang: zh-CN
title: 投币
description: 投币
---

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { coinSchema } from './_schema'
import useConfigStore from '@store/config'
const { configs, id ,users} = storeToRefs(useConfigStore())

const options = users.value.map(user => ({
  label:user.name,
  key:user.name
}))
const key = ref(options[0].key)


function handleSelect (k: string | number) {
  k = String(k)
  if(key.value === k) return
  console.info(k)
  key.value = k
}
</script>

## 帐号管理

<n-dropdown trigger="hover" :options="options" @select="handleSelect">
<n-button>切换帐号({{key}})</n-button>
</n-dropdown>

## 表单

<JSONSchema :schema="coinSchema" v-model="configs[id].coin"></JSONSchema>

## 代码

```json-vue
{{configs[id].coin}}
```
