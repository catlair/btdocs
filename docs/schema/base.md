<script lang="ts" setup>
import ChangeUser from './ChangeUser.vue'

import * as naive from 'naive-ui';
import { storeToRefs } from 'pinia';
import { useData } from 'vitepress'
import { ref, onMounted, computed, h } from 'vue'
import useConfigStore from '@store/config'
import { useConfigSchema } from '@data/configSchema'
import VueForm from '@lljj/vue3-form-naive';

const { useMessage, NTooltip, DropdownOption, DropdownGroupOption } = naive;
const { isDark } = useData()

const schema = useConfigSchema({ isDark })

const message = useMessage();
const configStore = useConfigStore()
const { index } = configStore
const { users, curUser } = storeToRefs(configStore)

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

<ChangeUser></ChangeUser>

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
