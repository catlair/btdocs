import { defineStore } from 'pinia';
import { createConfig } from './_config';
import { cloneDeep } from 'lodash-es';
import { encodeCookie } from '@utils/cookie';

const users = [
  {
    name: '公共配置',
    remark: '公共配置',
    config: createConfig(),
  },
];

const useConfigStore = defineStore('config', {
  state: () => ({
    curUser: '公共配置',
    users,
  }),
  getters: {
    config: state =>
      state.users.map(user => {
        if (user.name === '公共配置') Reflect.set(user.config, '__common__', true);
        return {
          ...user.config,
          cookie: encodeCookie(user.config.cookie),
        };
      }),
    index: state => state.users.findIndex(user => user.name === state.curUser) || 0,
  },
  actions: {
    addUser(user: { name: any }) {
      if (this.users.find(u => u.name === user.name)) return false;
      this.users.push({
        ...user,
        config: createConfig(),
      });
      return true;
    },
    delUser(index: number) {
      return this.users.splice(index, 1).length !== 0;
    },
    patchUser(index: number, data: any) {
      this.users[index] = {
        ...this.users[index],
        ...data,
      };
    },
    copyUser({ config, name, remark }: (typeof users)[number] & { key: number }) {
      this.users.push({
        config: cloneDeep(config),
        name: `${name} copy`,
        remark: `${remark} copy`,
      });
    },
  },
  persist: {
    debug: import.meta.env.DEV,
  },
} as any);

export default useConfigStore;
