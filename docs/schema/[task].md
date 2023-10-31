---
lang: zh-CN
---

<script setup lang="ts">
import * as naive from 'naive-ui';
import { storeToRefs } from 'pinia';
import { h } from 'vue'
import useConfigStore from '@store/config'
import { snakeToCamel } from '@utils'
import schema from '@data/configSchema'
const { useMessage, NTooltip, DropdownOption, DropdownGroupOption } = naive;

const message = useMessage();
const configStore = useConfigStore()
const { index } = configStore
const { users, curUser } = storeToRefs(configStore)

const options = users.value.map(user => ({
  label: user.name,
  key: user.name,
  remark: user.remark
}))

const renderOption = ({
        node,
        option
      }: {
        node: VNode
        option: DropdownOption | DropdownGroupOption
      }) => {
        return h(
          NTooltip,
          { keepAliveOnHover: false, style: { width: 'max-content' } },
          {
            trigger: () => [node],
            default: () => option.remark
          }
        )
      }

function handleSelect (name: string | number) {
  name = String(name)
  if(curUser.value === name) {
    message.info("哦？你试图切换为自己，难道你是两面三刀的人？")
    return
  }
  console.info(name)
  let messageReactive = message.loading(
          '心急喝不了冷稀饭。',{
            duration: 5000,
            onAfterEnter(){
              curUser.value = name
              message.success(`切换为 [${name}]。亡羊补牢，为时未晚。你现在换回去还来得及。`)
              messageReactive.destroy()
              messageReactive = null
            }
          }
   )

}

</script>

# {{ $params.title }}

{{$params.description}}

## 帐号管理

<n-dropdown trigger="hover" :options="options" @select="handleSelect" :show-arrow="true" :render-option="renderOption">
<n-button>切换帐号({{curUser}})</n-button>
</n-dropdown>

## 表单

<JSONSchema :schema="schema[snakeToCamel($params.task) + 'Schema']" v-model="users[index].config[$params.task]"></JSONSchema>

## 代码

```json-vue
{{users[index].config[$params.task]}}
```
