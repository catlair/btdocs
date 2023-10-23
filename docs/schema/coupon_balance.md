---
lang: zh-CN
title: 使用 B 币券
description: 使用 B 币券
---

<script setup lang="ts">
import useConfigStore from '@store/config'
const data = useConfigStore()

const couponBalanceSchema = {
  type: 'object',
  properties: {
    mid: {
      type: 'integer',
      title: '充电的 up',
      default: 0,
      description: '充电的 up 默认自己',
    },
    presetTime: {
      type: 'array',
      title: '执行时间',
      default: [10, 20],
      items: {
        type: 'integer',
      },
      description: '预设时间，哪一天？设置为空数组即每一天',
    },
    use: {
      type: 'string',
      title: '使用方式',
      default: '充电',
      description: '使用方式',
      enum: ['充电', '电池'],
    },
  },
};

</script>

## 表单

<JSONSchema :schema="couponBalanceSchema" v-model="data.couponBalance"></JSONSchema>

## 代码

```json-vue
{{data.couponBalance}}
```
