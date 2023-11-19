<script lang="ts" setup>
import ChangeUser from './ChangeUser.vue'

import { storeToRefs } from 'pinia';
import { ref, onMounted, computed } from 'vue'
import useConfigStore from '@store/config'
import { useConfigSchema } from '@data/configSchema'
import { isBiliCookie } from '@utils/cookie'
import VueForm from '@lljj/vue3-form-naive';

const schema = useConfigSchema()

const configStore = useConfigStore()
const { users, index } = storeToRefs(configStore)

const user = computed(() => users.value[index.value])


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

const rules = [{
        rule: 'cookie',
        validator(value, _rootFormData) {
            if (!isBiliCookie(value)) return 'Cookie 校验不通过，请注意 Cookie是否满足脚本要求（至少存在 bili_jct， SESSDATA， DedeUserID，且长度大于90）';
        }
}];

const customRule = ({field, value, rootFormData, callback}) => {
    for(const ruleItem of rules) {
        // String | Regx
        if ((String(ruleItem.rule) === ruleItem.rule && ruleItem.rule === field)
                || (Object.prototype.toString.call(ruleItem.rule) === '[object RegExp]' && ruleItem.rule.test(field))
        ) {
            const error = ruleItem.validator(value, rootFormData);
            // 停止继续校验
            if (error) return callback(error);
        }
    }
    return callback()
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
      :custom-rule="customRule"
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
