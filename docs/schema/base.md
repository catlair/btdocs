<script lang="ts" setup>
import * as naive from 'naive-ui';
import { storeToRefs } from 'pinia';
import { ref, onMounted, computed, h } from 'vue'
import useConfigStore from '@store/config'
import schema from '@data/configSchema'
import VueForm from '@lljj/vue3-form-naive';

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

const user = users.value[index]

const base = computed(()=>
  ( {cookie: user.config.cookie,
  createCookieDay: user.config.createCookieDay,
  apiDelay: user.config.apiDelay,
  dailyRunTime: user.config.dailyRunTime,
  userAgent: user.config.userAgent}
))

const userAgent = ref('')

onMounted(()=>{
  userAgent.value = window.navigator.userAgent
})

const formProps = {
  layoutColumn: 1,
};

const uiSchema = {
  'ui:width': {
    width: '50%',
  },
};

const submit = (data: any) => {
  console.log(data);
};

const formFooter = {
  show: false,
};

const change = ({newValue}) => {
  users.value[index].config = {...users.value[index].config,...newValue}
}
</script>

# 基本配置

## 帐号管理

<n-dropdown trigger="hover" :options="options" @select="handleSelect" :show-arrow="true" :render-option="renderOption">
<n-button>切换帐号({{curUser}})</n-button>
</n-dropdown>

## 表单

<div class="form">
    <vue-form
      :modelValue="base"
      :schema="schema['baseSchema']"
      :form-props="formProps"
      :ui-schema="uiSchema"
      :formFooter="formFooter"
      @submit="submit"
      @change="change"
    ></vue-form>
  </div>

## 代码

```json-vue
{{base}}
```

## 本浏览器 UA

```text-vue
{{userAgent}}
```
