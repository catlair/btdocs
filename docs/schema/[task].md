---
lang: zh-CN
---

<script setup lang="ts">
import ChangeUser from './ChangeUser.vue'

import { storeToRefs } from 'pinia';
import useConfigStore from '@store/config'
import { snakeToCamel } from '@utils'
import { useConfigSchema } from '@data/configSchema'
import { data } from './function.data'

const schema = useConfigSchema()

const task2func = data.task2func

const configStore = useConfigStore()
const { users, curUser, index } = storeToRefs(configStore)
</script>

# {{ $params.title }}

<div v-if="users?.[index]?.config?.function?.[task2func?.[$params.task]] !== undefined" style="margin-top: 1rem;">
<n-switch v-model:value="users[index].config.function[task2func[$params.task]]">
 <template #checked>
      点击关闭{{$params.title}}功能
    </template>
    <template #unchecked>
      点击开启{{$params.title}}功能
    </template>
</n-switch> 
</div>

{{ $params.description }}

<!-- @content -->

## 帐号管理

{{index}}-{{curUser}}

<ChangeUser></ChangeUser>

## 表单

<JSONSchema :schema="schema[snakeToCamel($params.task) + 'Schema']" v-model="users[index].config[snakeToCamel($params.task)]"></JSONSchema>

## 代码

```json-vue
{{ {[snakeToCamel($params.task)]: users[index].config[snakeToCamel($params.task)]} }}
```
