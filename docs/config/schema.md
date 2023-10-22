---
lang: zh-CN
title: 历史配置对比
description: 历史配置对比
---

## TODO

::: info
功能建设中，建议请直接回复到底部评论区
:::

- [ ] 简单实现
- [ ] 多账号
- [x] 保存页面状态
- [ ] UI 组件优化
- [ ] 导入已有配置

## 风纪委员

<JSONSchema :schema="_schema.jury" v-model="data.jury"></JSONSchema>

```json-vue
{{data.jury}}
```

## 硬币竞猜

<JSONSchema :schema="_schema.match" v-model="data.match"></JSONSchema>

```json-vue
{{data.match}}
```

## 直播间礼物

<JSONSchema :schema="_schema.gift" v-model="data.gift"></JSONSchema>

```json-vue
{{data.gift}}
```

## 使用 B 币券

<JSONSchema :schema="_schema.couponBalance" v-model="data.couponBalance"></JSONSchema>

```json-vue
{{data.couponBalance}}
```

## 投币

<JSONSchema :schema="_schema.coin" v-model="data.coin"></JSONSchema>

```json-vue
{{data.coin}}
```

## 漫画

<JSONSchema :schema="_schema.manga" v-model="data.manga"></JSONSchema>

```json-vue
{{data.manga}}
```

## 亲密度

<JSONSchema :schema="_schema.intimacy" v-model="data.intimacy"></JSONSchema>

```json-vue
{{data.intimacy}}
```

## 取关

<!-- <JSONSchema :schema="_schema.unFollow" v-model="data.unFollow"></JSONSchema> -->

```json-vue
{{data.unFollow}}
```

## 每日电池

<JSONSchema :schema="_schema.dailyBattery" v-model="data.dailyBattery"></JSONSchema>

```json-vue
{{data.dailyBattery}}
```

## 大积分

<JSONSchema :schema="_schema.bigPoint" v-model="data.bigPoint"></JSONSchema>

```json-vue
{{data.bigPoint}}
```

## 大积分兑换

<JSONSchema :schema="_schema.exchangeBigPoint" v-model="data.exchangeBigPoint"></JSONSchema>

```json-vue
{{data.exchangeBigPoint}}
```

## 转盘

<JSONSchema :schema="_schema.activityLottery" v-model="data.activityLottery"></JSONSchema>

```json-vue
{{data.activityLottery}}
```

## 观看直播

<JSONSchema :schema="_schema.watchLink" v-model="data.watchLink"></JSONSchema>

```json-vue
{{data.watchLink}}
```

## 直播弹幕

<JSONSchema :schema="_schema.liveDm" v-model="data.liveDm"></JSONSchema>

```json-vue
{{data.liveDm}}
```

## 直播

<JSONSchema :schema="_schema.blink" v-model="data.blink"></JSONSchema>

```json-vue
{{data.blink}}
```

## 配置总览

```json-vue
{{data}}
```

<script setup lang="ts">
import JSONSchema from '@components/JSONSchema.vue'
import { onActivated, onMounted, ref } from 'vue';
import VueForm from '@lljj/vue3-form-naive';
import * as _schema from './_schema';
import {defaultConfig} from './config'
// import useConfigStore from '@store/config'

// const data = useConfigStore()

const data = ref(defaultConfig)

onActivated(() => {
console.log('about page activated');
});

onMounted(() => {
console.log('about page mounted');
});

</script>

<style scoped></style>
