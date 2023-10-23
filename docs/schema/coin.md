---
lang: zh-CN
title: 投币
description: 投币
---

<script setup lang="ts">
import useConfigStore from '@store/config'
const data = useConfigStore()

const coinSchema = {
  type: 'object',
  properties: {
    customizeUp: {
      type: 'array',
      title: '投币列表',
      default: [],
      items: {
        type: 'integer',
      },
      description: '自定义高优先级用户列表',
    },
    targetLevel: {
      type: 'integer',
      title: '目标等级',
      default: 6,
      maximum: 6,
      minimum: 0,
      description: '目标等级 默认6级',
    },
    stayCoins: {
      type: 'integer',
      title: '剩余硬币数',
      default: 0,
      minimum: 0,
      description: '最低剩余硬币数,默认0',
    },
    targetCoins: {
      type: 'integer',
      title: '预计投币数',
      default: 5,
      minimum: 1,
      description: '预计投币数,默认5',
    },
    src: {
      type: 'array',
      title: '获取稿件的来源',
      items: {
        type: 'string',
      },
      default: ['自定义UP', '特别关注', '关注', '首页推荐', '分区排行'],
      description: '获取稿件的来源（排序），留空则来自 首页推荐',
    },
    upperAccMatch: {
      type: 'boolean',
      title: '精准投币',
      default: false,
      description: '稿件必须是 up 的稿件，而非合作视频中的参与者',
    },
  },
};

</script>

## 表单

<JSONSchema :schema="coinSchema" v-model="data.coin"></JSONSchema>

## 代码

```json-vue
{{data.coin}}
```
