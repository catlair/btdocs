import { reactive } from 'vue';
import { cloneDeep } from 'lodash-es';

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

export function getDefConfig() {
  return cloneDeep({
    dailyRunTime: '17:30:00-23:40:00',
    cookie: '',
    userAgent: '',
    function: {
      silver2Coin: true,
      liveSignTask: true,
      addCoins: true,
      shareAndWatch: true,
      supGroupSign: false,
      useCouponBp: false,
      getVipPrivilege: false,
      giveGift: false,
      matchGame: false,
      liveLottery: false,
      liveRedPack: false,
      batchUnfollow: false,
      liveIntimacy: false,
      mangaTask: false,
      bigPoint: false,
      judgement: false,
      activityLottery: false,
      dailyBattery: false,
      liveWeekTask: false,
      blink: false,
      watchLink: false,
      liveDm: false,
      addExp: true,
    },
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
    couponBalance: {
      /** 充电的 up 默认自己 */
      mid: 0,
      /** 预设时间，哪一天？设置为空数组即每一天 */
      presetTime: [10, 20],
      /** 使用方式 */
      use: '充电' as '充电' | '电池' | 'charge' | 'battery',
    },
    match: {
      /** 压硬币数量 */
      coins: 2,
      /** 压硬币规则 大于0 是正压，小于反压 */
      selection: 1,
      /** 比赛赔率差距需要大于多少才压 */
      diff: 7,
    },
    manga: {
      // 购买漫画的数量，小于 1 为自动。仅在 buyMangaOnlyBeforeExpire 为 false 时有效
      buyNum: 1,
      // 签到
      sign: true,
      // 购买漫画
      buy: false,
      // 每日阅读
      read: true,
      // 购买漫画 id（优先级高）
      mc: [] as number[],
      // 购买漫画名称（优先级中）
      name: [] as string[],
      // 购买追漫（优先级低）
      love: true,
    },
    jury: {
      // 重复运行次数，小于0为无限制
      repeat: 999,
      // 默认投票 0-3 好-无法判断，从中随机
      vote: [0, 0, 1],
      // 是否采用参考投票
      opinion: true,
      // 参考投票最少人数
      opinionMin: 3,
      // 排除投票 0-3 好-无法判断，用于配合参考投票，不影响【默认投票】配置
      notOpinion: [3],
      // 没有案件后的等待时间（分）
      waitTime: 20,
      // insiders 参考值
      insiderWeight: 0.8,
      // 是否观看视频 0 不观看，1 观看
      insiders: [0, 1],
      // 是否匿名 0 不匿名，1 匿名
      anonymous: [0, 1],
      // 云函数下使用新的触发器进行休眠
      newTrigger: true,
      // 异步，非云函数下使用。不支持推送结果
      async: false,
    },
    gift: {
      /** 自定义投喂礼物用户列表 */
      mids: [] as number[],
      // 投喂礼物 id
      // 辣条 小心心 能量石头 PK票 小海浪
      id: [1, 30607, 30426, 31531, 31674],
      // 投喂礼物 name
      name: [] as string[],
      // 无视其它礼物配置，投喂所有即将过期礼物
      all: false,
      // 仅投喂即将过期的礼物
      expire: true,
    },
    intimacy: {
      // 直播弹幕
      liveSendMessage: true,
      // 点赞直播间
      liveLike: true,
      // 直播心跳
      liveHeart: false,
      // 白名单
      whiteList: [] as number[],
      // 黑名单
      blackList: [] as number[],
      // 每日亲密度上限 （系统 1500）
      limitFeed: 1500,
      // 同时有多少个直播间已获取亲密度超过200时，强制跳过弹幕和点赞。小于 0 不跳过
      skipNum: 10,
      // 完成直播心跳后是否再检查一次，可能因为数据延迟而重复操作，不建议云函数开启
      isRetryHeart: false,
      // 专属弹幕
      dm: {
        // id 为 up 主 mid，非直播间 id。用于某些直播间可能有机器人玩法
        // 11111: '打卡',
      } as Record<number, string | string[]>,
    },
    dailyBattery: {
      tasks: ['5弹幕', '20弹幕', '20弹幕30秒观看'] as ('5弹幕' | '20弹幕' | '20弹幕30秒观看')[],
      // 每次任务间隔时间，单位 s
      delay: [8, 12],
      // 当重复获取到同一roomid时，等待时间，单位 s
      delayByRoomid: [10, 20],
    },
    unFollow: {
      // 单个取消的时间间隔（秒）
      delay: 3,
      // 中场休息，[取消数量, 休息时间（分）] 取消数量和休息时间都应该为正数（非0），否则无效
      restTime: [20, -1],
      // 总数 -1 无限制
      totalNum: -1,
      // 取消关注的 tag
      tags: ['天选时刻', 'rp关注'],
    },
    bigPoint: {
      // 是否重试，或者重试间隔时间，单位秒
      isRetry: 20 as boolean | number,
      // 是否观看视频
      isWatch: true,
      // 领取任务后的观看延时（秒）
      watchDelay: 40,
    },
    exchangeBigPoint: {
      // 多次尝试间隔时间，单位 ms
      delay: 200,
      // 重试次数
      retry: 3,
      // 启动延时 ms（12点开始计算）
      startDelay: 30,
      // 兑换商品名称，与 token 二选一
      name: [] as string[],
      // 兑换商品 token
      token: [] as string[],
    },
    activityLottery: {
      // 活动列表
      list: [] as ActivityLotteryIdType[],
      // 是否从网络请求活动列表
      isRequest: true,
      // 抽奖延时（秒）
      delay: [1.8, 3.2],
      // 追番？
      bangumi: false,
      // 关注？
      follow: false,
      // 请求 GitHub 使用的代理前缀
      proxyPrefix: 'https://ghproxy.com/',
      // 自定义活动列表链接
      customUrl: '',
    },
    exchangeCoupon: {
      // 兑换漫读券数量，小于 1 为自动
      num: 1,
      // 间隔时间，单位 ms，随机误差 -50 ~ 150
      delay: 2000,
      // 保留积分数
      keepAmount: 0,
      // 兑换开始时间，0、10、12
      startHour: [0],
      // 分多次兑换，小于 1 或者大于 num 则配置无效，不分多次
      multiNum: 0,
    },
    lottery: {
      /** 天选屏蔽奖品 */
      excludeAward: [
        '舰',
        '船',
        '航海',
        '代金券',
        '优惠券',
        '自拍',
        '照',
        '写真',
        '图',
        '提督',
        '车车一局',
        '再来一局',
        '游戏道具',
      ],
      /** 天选包含奖品 */
      includeAward: ['谢'],
      /** 黑名单 */
      blackUid: [65566781, 1277481241, 1643654862, 603676925],
      /** 天选时刻关注 UP 移动到分组 */
      moveTag: '天选时刻',
      /** 天选获取的直播页数 */
      pageNum: 2,
      /** 关注回复处理方式  */
      actFollowMsg: 'read' as 'read' | 'del' | 'delete' | 'none' | undefined,
      /** 扫描关注的用户 */
      scanFollow: undefined as string | 'only' | undefined,
      /** 跳过需要关注的天选 */
      skipNeedFollow: false,
      // 打印可能中奖的消息
      mayBeWinMsg: true,
    },
    redPack: {
      /**
       * 声明：
       * 表示次数时，小于等于0的数表示不限制次数
       */
      // 直播间来源方式 1 活动（活动链接可能更新不及时），2 扫描。其它值 所有方式依次尝试。
      source: 0,
      // 活动链接
      uri: '',
      // 仅使用活动时有效，每轮抢红包的间隔时间（秒）
      intervalActive: 60,
      // 中场休息时间，当每参加了几个直播间的时候，休息一下 [参加个数，休息时间（分，小于1为直接结束）]
      restTime: [-1, -1],
      // 疑似触发风控时休眠时间，[连续出现次数，休眠时间（分，小于1为直接结束）]
      riskTime: [-1, -1], // 与 riskNum 不同，该参数会与 restTime 互相影响重置次数
      // 【废弃】
      riskSleepTime: -1,
      // 同时参与的直播间数量
      linkRoomNum: 1,
      // 总参与次数，达到后不管结果如何，直接结束
      totalNum: -1,
      // 参与直播时发送的弹幕数量（与内置数量比，min(10，剩余时间/5，配置)）
      // [固定值]，[最少,最多]
      dmNum: [10],
      // 是否在等待时处理关注用户（读取消息，移动）
      moveUpInWait: true,
      /** 天选时刻关注 UP 移动到分组 */
      moveTag: 'rp关注',
      /** 关注回复处理方式  */
      actFollowMsg: 'read' as 'read' | 'del' | 'delete' | 'none' | undefined,
      // 连续超过多少次没有中，直接结束，小于1为不限制
      noWinNum: 10, // 避免一直运行
      // 连续疑似触发风控多少次，直接结束，小于1为不限制
      riskNum: 5, // 避免一直运行
    },
    watchLink: {
      // 用户 uid，非直播间 id
      uid: [] as number[],
      // 直播间 id
      roomid: [] as number[],
      // 直播心跳
      heart: true,
      time: 30,
      // 直播 wss 心跳
      wss: false,
      // 直播 tcp 心跳，与 wss 是一致的
      tcp: false,
      parentId: undefined,
      areaId: undefined,
      // 分区
      area: [
        [3, 321],
        [3, 549],
      ],
    },
    liveDm: {
      // 直播间 id
      roomid: [],
      // 延时 s
      delay: [8, 13],
      // 次数
      num: 0,
      // 自定义
      custom: [] as LiveDmCustom[],
    },
  });
}

export function createConfig() {
  return reactive(getDefConfig());
}
