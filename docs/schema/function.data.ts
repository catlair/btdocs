import { snakeToCamel } from '../.vitepress/utils';

export default {
  load() {
    const task2func = {
      coin: 'addCoins',
      manga: 'mangaTask',
      coupon_balance: 'useCouponBp',
      gift: 'giveGift',
      match: 'matchGame',
      un_follow: 'batchUnfollow',
      lottery: 'liveLottery',
      intimacy: 'liveIntimacy',
      big_point: 'bigPoint',
      jury: 'judgement',
      activity_lottery: 'activityLottery',
      add_exp: 'addExp',
      daily_battery: 'dailyBattery',
      watch_link: 'watchLink',
      live_dm: 'liveDm',
      red_pack: 'liveRedPack',
    };
    return {
      task2func,
      func2conf: Object.fromEntries(
        Object.entries(task2func).map(([key, value]) => [value, snakeToCamel(key)]),
      ),
    };
  },
};
