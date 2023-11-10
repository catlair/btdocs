<script lang="ts" setup>
import ChangeUser from './ChangeUser.vue'

import { storeToRefs } from 'pinia';
import { ref, onMounted, computed } from 'vue'
import useConfigStore from '@store/config'
import { useConfigSchema } from '@data/configSchema'
import VueForm from '@lljj/vue3-form-naive';

const schema = useConfigSchema()

const configStore = useConfigStore()
const { users, index } = storeToRefs(configStore)

const user = computed(()=>users.value[index.value])


const baseSchema = computed(() => {
    Reflect.set(schema.value['baseSchema']['properties']['cookie'], 'ui:hidden', user.value.name === '公共配置')
  return schema.value['baseSchema']
})

const base = computed(()=>{
  const {cookie,createCookieDay,apiDelay,dailyRunTime,userAgent} = user.value.config
  return {cookie,createCookieDay,apiDelay,dailyRunTime,userAgent}
})

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
  users.value[index.value].config = {...users.value[index.value].config,...newValue}
}
</script>

# 基本配置

## 帐号管理

<ChangeUser></ChangeUser>

## 表单

<div class="form">
    <vue-form
      :modelValue="base"
      :schema="baseSchema"
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
