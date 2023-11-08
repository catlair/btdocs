---
lang: zh-CN
---

<script setup lang="ts">
import ChangeUser from './ChangeUser.vue'

import { storeToRefs } from 'pinia';
import useConfigStore from '@store/config'
import { snakeToCamel } from '@utils'
import { useConfigSchema } from '@data/configSchema'


const schema = useConfigSchema()

const configStore = useConfigStore()
const { users, curUser, index } = storeToRefs(configStore)
</script>

# {{ $params.title }}

{{ $params.description }}

<!-- @content -->

## 帐号管理

{{index}}-{{curUser}}

<ChangeUser></ChangeUser>

## 表单

<JSONSchema :schema="schema[snakeToCamel($params.task) + 'Schema']" v-model="users[index].config[snakeToCamel($params.task)]"></JSONSchema>

## 代码

```json-vue
{{users[index].config[snakeToCamel($params.task)]}}
```
