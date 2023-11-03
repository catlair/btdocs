---
lang: zh-CN
---

<script setup lang="ts">
import ChangeUser from './ChangeUser.vue'

import * as naive from 'naive-ui';
import { storeToRefs } from 'pinia';
import { h } from 'vue'
import useConfigStore from '@store/config'
import { snakeToCamel } from '@utils'
import { useConfigSchema } from '@data/configSchema'

const { useMessage, NTooltip, DropdownOption, DropdownGroupOption } = naive;

const schema = useConfigSchema()

const message = useMessage();
const configStore = useConfigStore()
const { users, curUser, index } = storeToRefs(configStore)
</script>

# {{ $params.title }}

{{$params.description}}

## 帐号管理

{{index}}-{{curUser}}

<ChangeUser></ChangeUser>

## 表单

<JSONSchema :schema="schema[snakeToCamel($params.task) + 'Schema']" v-model="users[index].config[snakeToCamel($params.task)]"></JSONSchema>

## 代码

```json-vue
{{users[index].config[$params.task]}}
```
