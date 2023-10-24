import { defineStore } from 'pinia';
import { ref } from 'vue';
import { defConfig } from './_config';

const useConfigStore = defineStore(
  'config',
  () => {
    const config = {
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

    return {
      ...config,
      config: ref(config),
    };
  },
  {
    persist: true,
  },
);

export default useConfigStore;
