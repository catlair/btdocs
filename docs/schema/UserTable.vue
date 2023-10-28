<template>
  <n-space vertical>
    <n-data-table :key="row => row.key" :columns="columns" :data="data" />
    <n-button type="tertiary" @click="buttonClick"> 添加新账号 </n-button>
  </n-space>
</template>

<script lang="ts" setup>
import * as naive from 'naive-ui';
import { h, defineComponent, ref, nextTick, computed } from 'vue';
import { storeToRefs } from 'pinia';
import useConfigStore from '@store/config';
const configStore = useConfigStore();
const { users } = storeToRefs(configStore);
const { NInput, NButton } = naive;

const data = computed(() =>
  users.value.map((user, index) => ({
    key: index,
    ...user,
  })),
);

const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    onUpdateValue: [Function],
  },
  setup(props) {
    const isEdit = ref(false);
    const inputRef = ref(null);
    const inputValue = ref(props.value);
    function handleOnClick() {
      isEdit.value = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    }
    function handleChange() {
      props.onUpdateValue(inputValue.value);
      isEdit.value = false;
    }
    return () =>
      h(
        'div',
        {
          style: 'min-height: 22px',
          onClick: handleOnClick,
        },
        isEdit.value
          ? h(NInput, {
              ref: inputRef,
              value: inputValue.value,
              onUpdateValue: v => {
                inputValue.value = v;
              },
              onChange: handleChange,
              onBlur: handleChange,
            })
          : props.value,
      );
  },
});

const buttonClick = () => {
  configStore.addUser({
    name: new Date().getTime().toString(),
    remark: '点击修改',
  });
};

const getDataIndex = key => {
  return data.value.findIndex(item => item.key === key);
};

const columns = [
  {
    title: '名称',
    key: 'name',
    width: 150,
    render(row) {
      const index = getDataIndex(row.key);
      return h(ShowOrEdit, {
        value: row.name,
        onUpdateValue(v) {
          console.log(index, data);
          data.value[index].name = v;
        },
      });
    },
  },
  {
    title: '备注',
    key: 'remark',
    render(row) {
      const index = getDataIndex(row.key);
      return h(ShowOrEdit, {
        value: row.remark,
        onUpdateValue(v) {
          data.value[index].remark = v;
        },
      });
    },
  },
  {
    title: 'Action',
    key: 'actions',
    render(row) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => {
            console.log('del', row);
            configStore.delUser(row.key);
          },
        },
        { default: () => '删除' },
      );
    },
  },
];
</script>
