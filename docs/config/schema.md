---
lang: zh-CN
title: 历史配置对比
description: 历史配置对比
---

## 风纪委员

<JSONSchema :schema="jury" v-model="data.jury"></JSONSchema>

```json-vue
{{data.jury}}
```

## 硬币竞猜

<JSONSchema :schema="match" v-model="data.match"></JSONSchema>

```json-vue
{{data.match}}
```

## 直播间礼物

<JSONSchema :schema="gift" v-model="data.gift"></JSONSchema>

```json-vue
{{data.gift}}
```

## 使用 B 币券

<JSONSchema :schema="couponBalance" v-model="data.couponBalance"></JSONSchema>

```json-vue
{{data.couponBalance}}
```

## 配置总览

```json-vue
{{data}}
```

<script setup lang="ts">
import JSONSchema from '@components/JSONSchema.vue'
import { onActivated, onMounted, ref } from 'vue';
import VueForm from '@lljj/vue3-form-naive';
import { jury, match ,gift,couponBalance} from './_schema';

onActivated(() => {
console.log('about page activated');
});

onMounted(() => {
console.log('about page mounted');
});



const data = ref({
  jury: {},
  match: {},
  gift:{},
  couponBalance: {}
})

const formProps = {
layoutColumn: 1
};

const uiSchema = {
'ui:width': {
width: '50%'
}
};

const submit = (data: any) => {
console.log(data);
};
</script>

<style scoped></style>
