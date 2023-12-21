---
lang: zh-CN
title: 配置表单
description: 配置表单
---

<script setup lang="ts">
import useConfigStore from '@store/config'
import { getDefConfig } from '@store/_config'
import { useLocalStorage } from '@vueuse/core'
import { cloneDeep } from 'lodash-es'
import { getCookieItem, difference } from '@utils'
import { data } from './function.data'
import { ref, computed, VNode, h } from 'vue'
import * as naive from 'naive-ui';
import JSON5 from 'json5'
const { useMessage, useDialog } = naive;
const store = useConfigStore()

const settings = useLocalStorage<string[]>('config-settings',['default', 'common', 'unused', 'useless'])
const selectUsers = ref<string[]>([])
const commonDisabled = ref(false)

const defConfig = getDefConfig()

const userConfig = computed(() => {
  commonDisabled.value = settings.value.includes('users')

  return ['default', 'common', 'unused', 'useless', 'users'].filter(str => settings.value.includes(str)).reduce((config, setting) => {
    switch (setting) {
      case 'default':
        return config.map((config) => difference(config, defConfig));
      case 'common':
        {
          const commonConfig = config.find(config => config.__common__)
          return commonConfig ? config.map(config => config.__common__ ? config : difference(config, commonConfig)) : config
        }
      case 'unused':
        {
          return config.map(config => {
            if(config.__common__) return config
            const functions = Object.assign({}, defConfig.function, config.function)
            Object.entries<string>(data.func2conf).map(([key,value])=> {
            if(functions[key] === false){
              Reflect.deleteProperty(config, value)
            }
           })
           return config
          })
        }
      case 'useless':
        {
          return config.filter(config => (config.__common__ || config.cookie));
        }
      default:
        return config;
    }
  }, cloneDeep<any[]>(settings.value.includes('users') ? store.users.map(user => selectUsers.value.includes(user.name) && user.config).filter(Boolean) : store.config))
})

function getUsers(){
 if (!configJson.value) {
    message.error('虽然我知道你什么都没输入，但是我还是理你一下');
    return
  }
  console.log(configJson.value)
  try {
    const json =  JSON5.parse(configJson.value)
       const users = (Array.isArray(json) ? json : [json]).map(el => {
          if(!el.cookie){
            return
          }
         return {
          name: getCookieItem(el.cookie, 'DedeUserID'),
          remark: '导入的配置',
          config: el,
        }
        }).filter(Boolean)
        console.log(users)
        if(users.length === 0) throw new Error('fuck')
        return users
  } catch (error) {
    message.error(`你在忽悠我，导入的配置是错误的。错误信息：${error.message}`)
  }
}

function btnClick() {
  dialog.warning({
    title: '警告',
    content: '你确定？这将删除自动保存的配置，且无法恢复。',
    positiveText: '确定',
    negativeText: '不确定',
    closable: false,
    onPositiveClick: () => {
      console.log(window.localStorage.removeItem('config'))
      location.reload()
      message.success('好吧，你赢了');
    },
  });
}

function coverBtn(){
  dialog.warning({
      title: '警告',
      content: '你确定？页面中已有的数据都会消失',
      positiveText: '确定',
      negativeText: '不确定',
      closable: false,
      onPositiveClick: () => {
      message.info('呵，你果然喜新厌旧。');
       const users = getUsers()
       if (users) {
        store.users = users
        store.curUser = store.users[0].name
        message.success('成功洗脑');
       }
      },
  });
}

function mergeBtn(){
  dialog.warning({
      title: '警告',
      content: '你确定？这只是单纯的导入你的配置，并不会合并相同帐号的数据。好比 1 + 1 = 11 而不是等于 2',
      positiveText: '确定',
      negativeText: '不确定',
      closable: false,
      onPositiveClick: () => {
        message.info('所以为啥 1 + 1 = 11 呢，你看了帐号管理就知道了');
        const users = getUsers()
         if (users) {
          store.users = [...store.users, ...users]
          store.curUser = store.users[0].name
          message.success('成功洗脑，有些配置可能是一样的，记得手动处理哦');
        }
      },
   });
}

const configJson = ref('')
const message = useMessage()
const dialog = useDialog()

const selectUsersRenderOption = ({ node, option }: { node: VNode; option: naive.SelectOption }) =>
  h(naive.NTooltip, null, {
    trigger: () => node,
    default: () => option.remark
  })
</script>

::: tip 提示
如果你正在使用 b.2024666.xyz 访问本页面，请尽快将数据导出，并使用 https://bo.js.cool/ 访问，本页面（b.2024666.xyz）将在一个月内关闭，届时将无法访问。
:::

::: tip 提示
页面建设中，配置文档右转 [配置文档](/config/)
:::

::: tip 提示
默认填写的表单是公共配置，公共配置不能够填写 Cookie，需要配置帐号请在帐号管理中添加一个配置。
:::

## 配置总览

<n-space vertical>
<n-checkbox-group v-model:value="settings">
  <n-space item-style="display: flex;">
    <n-checkbox value="default" label="去除默认" />
    <n-checkbox value="common" label="去除公共" :disabled="commonDisabled" />
    <n-checkbox value="unused" label="去除未使用" />
    <n-checkbox value="useless" label="去除无效" />
    <n-checkbox value="users" label="指定用户" />
  </n-space>
</n-checkbox-group>

<n-select v-show="settings.includes('users')" v-model:value="selectUsers" :render-option="selectUsersRenderOption" multiple :options="store.users.map(user => ({label:user.name,value:user.name,remark:user.remark}))"/>
</n-space>

::: code-group

```json-vue [最简配置（推荐）]
{{ userConfig }}
```

```json-vue [全部配置]
{{ store.config }}
```

:::

## 导入已有配置

::: tip
粘贴你的 config 文件中的内容，支持 josn/json5

请对自己的数据负责，如果你胡乱输入则会导致数据错误引发页面错误，只能使用开发选项的重置缓存回到最初的起点。
:::

<n-space vertical>

<n-input
      v-model:value="configJson"
      type="textarea"
      placeholder="粘贴你的 config 文件中的内容，支持 josn/json5"
/>

<n-space justify="end">
    <n-button type="success" @click="mergeBtn">
      合并配置
    </n-button>
    <n-button type="warning" @click="coverBtn">
      覆盖配置
    </n-button>
  </n-space>

</n-space>

## 开发选项

::: danger
用于开发中修复数据结构被修改后导致页面错误的问题。这将删除自动保存的配置。
:::

<n-button @click="btnClick">重置缓存</n-button>

## 宛如戏台上的老将军，背上插满了 flag

::: tip
在功能建设的道路上，你若有什么建议，请直接在底部评论区砸砖！

虽然本项目目前还没有文档贡献者，但又如诗云：「登上那座南山，采摘蕨菜；没有见到君子，就会憔悴不堪。」

最终，我们将以更轻松愉快的方式去替换现有的表格模式文档介绍，降低使用难度。所以，一起加入这个“地狱”，让我们一起让这个项目变得更美好！
:::

下面是 todo list，flag 立得像戏台上的老将军，但是谁说一定会做呢。

- [x] 简单实现，~~什么，还不能用？那你说个 der~~，支持导入导出，姑且认为能用
- [x] 多账号，也不是很难嘛
- [x] 保存页面状态，一个插件而已
- [ ] 保存状态到 indexDB，实现撤回功能。
- [x] UI 组件优化，~~你会 CSS？~~
- [x] 导入已有配置
- [x] 简化导出配置，大家磁盘都是花钱买的
- [x] 组件支持主题，~~支持了，但又没支持~~，覆盖 @lljj/vue3-form-naive 部分 class 后真的支持了
- [x] @lljj/vue3-form-naive 暗黑下的奇怪配色
- [x] 配置项描述迁移
- [ ] json 代码块可编辑
- [ ] 修改部分配置从而更好适配
- [ ] 处理默认值修改的情况
- [x] 配置复制
- [ ] 完善部分配置校验，例如 Cookie，doing（cookie 已完成
- [x] 导出配置过滤掉无效配置
- [x] @lljj/vue3-form-naive 不支持 addtionalProperties，自定义实现部分需要动态输入的配置
- [x] 公共配置隐藏 cookie 配置
