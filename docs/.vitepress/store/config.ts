import { defineStore } from 'pinia';

export type LevelType = 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';

export interface ActivityLotteryIdType {
  sid: string;
  title?: string;
  bangumis?: number[];
  followBangumi?: boolean;
  follows?: number[];
  followed?: boolean;
}

export type LiveDmCustom =
  | {
      id: number;
      num: number;
      msg: string[];
    }
  | [number, number, string[]];

const useConfigStore = defineStore('config', {
  state: () => {
    return {
      coin: {
        /** 自定义高优先级用户列表 */
        customizeUp: [] as number[],
        /** 目标等级 默认6级 */
        targetLevel: 6,
        /** 最低剩余硬币数,默认0 */
        stayCoins: 0,
        /** 预计投币数,默认5 */
        targetCoins: 5,
        /** 稿件必须是 up 的稿件，而非合作视频中的参与者 */
        upperAccMatch: false,
        /** 获取稿件的来源（排序），留空则来自 首页推荐 */
        src: ['自定义UP', '特别关注', '关注', '首页推荐', '分区排行'],
      },
    };
  },
  getters: {},
  actions: {},
  // persist: true,
});

export default useConfigStore;
