---
lang: zh-CN
title: 风纪委员
description: 风纪委员
---

<script setup lang="ts">
import useConfigStore from '@store/config'
const data = useConfigStore()

const jurySchema = {
  type: 'object',
  properties: {
    repeat: {
      type: 'integer',
      title: '重复运行次数',
      default: 999,
      description: '重复运行次数，小于0为无限制',
    },
    vote: {
      type: 'array',
      title: '默认投票',
      items: {
        type: 'integer',
        enum: [0, 1, 2, 3],
        'ui:showTitle': false,
        'ui:widget': 'RadioWidget',
        enumNames: ['好', '一般', '差', '无法判断'],
      },
      default: [0, 0, 1],
      description: '默认投票 0-3 好-无法判断（随机选择，多个可增加概率）',
    },
    opinion: {
      type: 'boolean',
      title: '参考投票',
      default: true,
      description: '是否采用参考投票',
    },
    opinionMin: {
      type: 'integer',
      title: '参考投票最少人数',
      default: 3,
      description: '有效的参考投票最少人数，少于则使用默认投票',
    },
    notOpinion: {
      type: 'array',
      title: '排除投票',
      default: [3],
      items: {
        type: 'integer',
        'ui:showTitle': false,
        enum: [0, 1, 2, 3],
        enumNames: ['好', '一般', '差', '无法判断'],
        'ui:widget': 'RadioWidget',
      },
      description: '排除投票 0-3 好-无法判断，用于配合参考投票，不影响【默认投票】配置',
    },
    waitTime: {
      type: 'integer',
      title: '等待时间',
      default: 20,
      description: '没有案件后的等待时间（分）',
    },
    insiderWeight: {
      type: 'number',
      title: 'insiders 参考值',
      default: 0.8,
      description: '参考别人观点时，如果他观看了视频则为 1，否则为此值',
    },
    insiders: {
      type: 'array',
      title: '重复运行次数',
      default: [0, 1],
      items: {
        type: 'integer',
        'ui:showTitle': false,
        enum: [0, 1],
        enumNames: ['不观看', '观看'],
        'ui:widget': 'RadioWidget',
      },
      description: '是否观看视频 0 不观看，1 观看（随机选择，多个可增加概率）',
    },
    anonymous: {
      type: 'array',
      title: '重复运行次数',
      default: [0, 1],
      items: {
        type: 'integer',
        enum: [0, 1],
        'ui:showTitle': false,
        enumNames: ['不匿名', '匿名'],
        'ui:widget': 'RadioWidget',
      },
      description: '是否匿名 0 不匿名，1 匿名（随机选择，多个可增加概率）',
    },
    newTrigger: {
      type: 'boolean',
      title: '新的触发器进行休眠',
      default: true,
      description: '云函数下使用新的触发器进行休眠',
    },
    async: {
      type: 'boolean',
      title: '异步',
      default: false,
      description: '异步，非云函数下使用。不支持推送结果',
    },
  },
};

</script>

## 表单

<JSONSchema :schema="jurySchema" v-model="data.jury"></JSONSchema>

## 代码

```json-vue
{{data.jury}}
```
