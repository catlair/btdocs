---
lang: zh-CN
title: 竞猜
description: 竞猜
---

<script setup lang="ts">
import useConfigStore from '@store/config'
const data = useConfigStore()

const matchSchema = {
  type: 'object',
  properties: {
    coins: {
      type: 'integer',
      title: '压硬币数量',
      default: 2,
      description: '压硬币数量',
      maximum: 10,
      minimum: 1,
    },
    selection: {
      type: 'integer',
      title: '压硬币规则',
      default: 1,
      description: '压硬币规则 大于0 是正压，小于反压',
    },
    diff: {
      type: 'number',
      title: '比赛赔率差',
      default: 7,
      description: '比赛赔率差距需要大于多少才压',
    },
  },
};

</script>

## 表单

<JSONSchema :schema="matchSchema" v-model="data.match"></JSONSchema>

## 代码

```json-vue
{{data.match}}
```
