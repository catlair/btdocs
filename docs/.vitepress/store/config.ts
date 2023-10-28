import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
import { defConfig } from './_config';

const useConfigStore = defineStore('config', {
  state: () => {
    function createConfig() {
      return {
        coin: ref(defConfig.coin),
        couponBalance: ref(defConfig.couponBalance),
        match: ref(defConfig.match),
        manga: ref(defConfig.manga),
        jury: ref(defConfig.jury),
        intimacy: ref(defConfig.intimacy),
        dailyBattery: ref(defConfig.dailyBattery),
        unFollow: ref(defConfig.unFollow),
        bigPoint: ref(defConfig.bigPoint),
        exchangeBigPoint: ref(defConfig.exchangeBigPoint),
        activityLottery: ref(defConfig.activityLottery),
        lottery: ref(defConfig.lottery),
        exchangeCoupon: ref(defConfig.exchangeCoupon),
        redPack: ref(defConfig.redPack),
        watchLink: ref(defConfig.watchLink),
        liveDm: ref(defConfig.liveDm),
      };
    }
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
  },
});

export default useConfigStore;
