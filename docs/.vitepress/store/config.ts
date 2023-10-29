import { defineStore } from 'pinia';
import { createConfig } from './_config';

const useConfigStore = defineStore('config', {
  state: () => {
    const configs = Object.create(null) as {
      [x: string | number]: ReturnType<typeof createConfig>;
    };
    Reflect.set(configs, '0', createConfig());
    const users = [
      {
        name: '公共配置',
        remark: '公共配置',
      },
    ];

    return {
      configs,
      id: 0,
      users,
    };
  },
  getters: {
    config: state => Object.values(state.configs),
  },
  actions: {
    addUser(user) {
      if (this.users.find(u => u.name === user.name)) return false;
      this.users.push(user);
      return true;
    },
    delUser(key: number) {
      this.users.splice(key, 1);
    },
  },
  persist: {
    beforeRestore: ctx => {
      console.log(`about to restore '${ctx.store.$id}'`, ctx);
    },
    afterRestore: ctx => {
      console.log(`just restored '${ctx.store.$id}'`, ctx);
    },
    debug: true,
  },
});

export default useConfigStore;
