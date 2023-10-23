---
lang: zh-CN
title: 漫画任务
description: 漫画任务
---

<script setup lang="ts">
import useConfigStore from '@store/config'
const data = useConfigStore()

const mangaSchema = {
  type: 'object',
  properties: {
    buyNum: {
      title: '购买漫画的数量',
      default: 1,
      type: 'integer',
      description: '购买漫画的数量，小于 1 为自动。仅在 buyMangaOnlyBeforeExpire 为 false 时有效',
    },
    sign: {
      type: 'boolean',
      title: '签到',
      default: true,
    },
    buy: {
      type: 'boolean',
      title: '购买漫画',
      default: false,
    },
    read: {
      type: 'boolean',
      default: true,
      title: '每日阅读',
    },
    mc: {
      type: 'array',
      title: '购买漫画 id（优先级高）',
      default: [],
      items: {
        type: 'integer',
      },
    },
    name: {
      type: 'array',
      title: '购买漫画名称（优先级中）',
      default: [],
      items: {
        type: 'string',
      },
    },
    love: {
      type: 'boolean',
      title: '购买追漫（优先级低）',
      default: true,
    },
  },
};

</script>

## 表单

<JSONSchema :schema="mangaSchema" v-model="data.manga"></JSONSchema>

## 代码

```json-vue
{{data.manga}}
```
