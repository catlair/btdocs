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
    const configs = ref(Object.create(null)) as Ref<{
      [x in number]: ReturnType<typeof createConfig>;
    }>;
    Reflect.set(configs.value, '0', createConfig());

    return {
      configs,
      id: ref(0),
    };
  },
  getters: {
    config: state => Object.values(state.configs),
  },
  persist: true,
});

export default useConfigStore;
