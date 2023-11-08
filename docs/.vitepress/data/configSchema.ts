import { IntimacyDmField, MessageApiDataField } from '@fields';
import { DynamicInput, DynamicInputNumber, DynamicTags } from '@widgets';
import { ref } from 'vue';

export function useConfigSchema() {
  const jurySchema = {
    type: 'object',
    properties: {
      repeat: {
        type: 'integer',
        title: '重复运行次数',
        default: 999,
        description: '重复运行次数，小于0为无限制',
      },
      vote: {
        type: 'array',
        title: '默认投票',
        items: {
          type: 'integer',
          enum: [0, 1, 2, 3],
          'ui:showTitle': false,
          'ui:widget': 'RadioWidget',
          enumNames: ['好', '一般', '差', '无法判断'],
        },
        default: [0, 0, 1],
        description: '默认投票 0-3 好-无法判断（随机选择，多个可增加概率）',
      },
      opinion: {
        type: 'boolean',
        title: '参考投票',
        default: true,
        description: '是否采用参考投票',
      },
      opinionMin: {
        type: 'integer',
        title: '参考投票最少人数',
        default: 3,
        description: '有效的参考投票最少人数，少于则使用默认投票',
      },
      notOpinion: {
        type: 'array',
        title: '排除投票',
        default: [3],
        items: {
          type: 'integer',
          'ui:showTitle': false,
          enum: [0, 1, 2, 3],
          enumNames: ['好', '一般', '差', '无法判断'],
          'ui:widget': 'RadioWidget',
        },
        description: '排除投票 0-3 好-无法判断，用于配合参考投票，不影响【默认投票】配置',
      },
      waitTime: {
        type: 'integer',
        title: '等待时间',
        default: 20,
        description: '没有案件后的等待时间（分）',
      },
      insiderWeight: {
        type: 'number',
        title: 'insiders 参考值',
        default: 0.8,
        description: '参考别人观点时，如果他观看了视频则为 1，否则为此值',
      },
      insiders: {
        type: 'array',
        title: '重复运行次数',
        default: [0, 1],
        items: {
          type: 'integer',
          'ui:showTitle': false,
          enum: [0, 1],
          enumNames: ['不观看', '观看'],
          'ui:widget': 'RadioWidget',
        },
        description: '是否观看视频 0 不观看，1 观看（随机选择，多个可增加概率）',
      },
      anonymous: {
        type: 'array',
        title: '重复运行次数',
        default: [0, 1],
        items: {
          type: 'integer',
          enum: [0, 1],
          'ui:showTitle': false,
          enumNames: ['不匿名', '匿名'],
          'ui:widget': 'RadioWidget',
        },
        description: '是否匿名 0 不匿名，1 匿名（随机选择，多个可增加概率）',
      },
      newTrigger: {
        type: 'boolean',
        title: '新的触发器进行休眠',
        default: true,
        description: '云函数下使用新的触发器进行休眠',
      },
      async: {
        type: 'boolean',
        title: '异步',
        default: false,
        description: '异步，非云函数下使用。不支持推送结果',
      },
    },
  };

  const matchSchema = {
    type: 'object',
    properties: {
      coins: {
        type: 'integer',
        title: '压硬币数量',
        default: 2,
        description: '压硬币数量',
        maximum: 10,
        minimum: 1,
      },
      selection: {
        type: 'integer',
        title: '压硬币规则',
        default: 1,
        description: '压硬币规则 大于0 是正压，小于反压',
      },
      diff: {
        type: 'number',
        title: '比赛赔率差',
        default: 7,
        description: '比赛赔率差距需要大于多少才压',
      },
    },
  };

  const giftSchema = {
    type: 'object',
    properties: {
      mids: {
        type: 'array',
        title: '投喂列表',
        default: [],
        items: {
          type: 'integer',
        },
        description: '自定义投喂礼物用户列表',
        'ui:widget': DynamicInputNumber,
      },
      id: {
        type: 'array',
        title: '投喂礼物 id',
        items: {
          type: 'integer',
        },
        default: [1, 30607, 30426, 31531, 31674],
        description: '投喂礼物 id',
        'ui:widget': DynamicInputNumber,
      },
      name: {
        type: 'array',
        title: '投喂礼物 name',
        items: {
          type: 'string',
        },
        default: [],
        description: '投喂礼物 name',
        'ui:widget': DynamicInput,
      },
      all: {
        type: 'boolean',
        title: '无视配置',
        default: false,
        description: '无视其它礼物配置，投喂所有即将过期礼物',
      },
      expire: {
        type: 'boolean',
        title: '过期的礼物',
        default: true,
        description: '仅投喂即将过期的礼物',
      },
    },
  };

  const couponBalanceSchema = {
    type: 'object',
    properties: {
      mid: {
        type: 'integer',
        title: '充电的 up',
        default: 0,
        description: '充电的 up 默认自己',
      },
      presetTime: {
        type: 'array',
        title: '执行时间',
        default: [10, 20],
        items: {
          type: 'integer',
        },
        description: '预设时间，哪一天？设置为空数组即每一天',
        'ui:widget': DynamicInputNumber,
      },
      use: {
        type: 'string',
        title: '使用方式',
        default: '充电',
        description: '使用方式',
        enum: ['充电', '电池'],
      },
    },
  };

  const coinSchema = {
    type: 'object',
    properties: {
      customizeUp: {
        type: 'array',
        title: '投币列表',
        default: [],
        items: {
          type: 'integer',
        },
        description: '自定义高优先级用户列表',
        'ui:widget': DynamicInputNumber,
        'ui:show-button': false,
        'ui:show-sort-button': false,
      },
      targetLevel: {
        type: 'integer',
        title: '目标等级',
        default: 6,
        maximum: 6,
        minimum: 0,
        description: '目标等级 默认6级',
      },
      stayCoins: {
        type: 'integer',
        title: '剩余硬币数',
        default: 0,
        minimum: 0,
        description: '最低剩余硬币数,默认0',
      },
      targetCoins: {
        type: 'integer',
        title: '预计投币数',
        default: 5,
        minimum: 1,
        description: '预计投币数,默认5',
      },
      src: {
        type: 'array',
        title: '获取稿件的来源',
        items: {
          type: 'string',
        },
        default: ['自定义UP', '特别关注', '关注', '首页推荐', '分区排行'],
        description: '获取稿件的来源（排序），留空则来自 首页推荐',
        'ui:widget': DynamicInput,
        'ui:min': 1,
        'ui:max': 5,
        'ui:show-sort-button': true,
      },
      upperAccMatch: {
        type: 'boolean',
        title: '精准投币',
        default: false,
        description: '稿件必须是 up 的稿件，而非合作视频中的参与者',
      },
    },
  };

  const mangaSchema = {
    type: 'object',
    properties: {
      buyNum: {
        title: '购买漫画的数量',
        default: 1,
        type: 'integer',
        description: '购买漫画的数量，小于 1 为自动。仅在 buyMangaOnlyBeforeExpire 为 false 时有效',
      },
      sign: {
        type: 'boolean',
        title: '签到',
        default: true,
      },
      buy: {
        type: 'boolean',
        title: '购买漫画',
        default: false,
      },
      read: {
        type: 'boolean',
        default: true,
        title: '每日阅读',
      },
      mc: {
        type: 'array',
        title: '购买漫画 id（优先级高）',
        default: [],
        items: {
          type: 'integer',
        },
        'ui:widget': DynamicInputNumber,
      },
      name: {
        type: 'array',
        title: '购买漫画名称（优先级中）',
        default: [],
        items: {
          type: 'string',
        },
        'ui:widget': DynamicInput,
      },
      love: {
        type: 'boolean',
        title: '购买追漫（优先级低）',
        default: true,
      },
    },
  };

  const intimacySchema = {
    type: 'object',
    properties: {
      liveSendMessage: {
        type: 'boolean',
        default: true,
        title: '直播弹幕',
        description: '直播弹幕（+100，点亮灰牌子）',
      },
      liveLike: {
        type: 'boolean',
        default: true,
        title: '点赞直播间',
        description: '点赞直播间 (+100)',
      },
      liveHeart: {
        type: 'boolean',
        default: false,
        title: '直播心跳',
        description: '观看直播 (+100 * n)',
      },
      whiteList: {
        type: 'array',
        title: '白名单',
        items: {
          type: 'integer',
        },
        default: [],
        description: '只操作此列表中的（优先级高于 黑名单）',
        'ui:widget': DynamicInputNumber,
      },
      blackList: {
        type: 'array',
        title: '黑名单',
        items: {
          type: 'integer',
        },
        description: '操作全部，但排除其中的',
        default: [],
        'ui:widget': DynamicInputNumber,
      },
      limitFeed: {
        type: 'integer',
        default: 1500,
        title: '每日亲密度上限 （系统 1500）',
        description:
          '每日亲密度上限 （系统为 1500），越小则 直播心跳 执行时间越少，反之越长，可以超过 1500，多做点可能更稳妥',
      },
      skipNum: {
        type: 'integer',
        default: 10,
        title: '跳过直播间',
        description: '同时有多少个直播间已获取亲密度超过 200 时，强制跳过弹幕和点赞。小于 0 不跳过',
      },
      isRetryHeart: {
        type: 'boolean',
        default: false,
        title: '是否重试',
        description: '完成直播心跳后是否再检查一次，可能因为数据延迟而重复操作，不建议云函数开启',
      },
      // 专属弹幕
      dm: {
        title: '专属弹幕',
        type: 'object',
        'ui:field': IntimacyDmField,
      },
    },
  };

  const unFollowSchema = {
    type: 'object',
    properties: {
      delay: {
        type: 'integer',
        title: '时间间隔',
        default: 3,
        minimum: 0,
        description: '单个取消的时间间隔（秒）',
      },
      restTime: {
        type: 'array',
        title: '中场休息，',
        default: [20, -1],
        description:
          '中场休息，[取消数量, 休息时间（分）] 取消数量和休息时间都应该为正数（非0），否则无效',
        items: {
          type: 'integer',
        },
        'ui:show-sort-button': false,
        'ui:widget': DynamicInputNumber,
        'ui:max': 2,
        'ui:min': 0,
      },
      totalNum: {
        type: 'integer',
        title: '总数',
        default: -1,
        minimum: -1,
        description: '总数 -1 无限制',
      },
      tags: {
        type: 'array',
        title: '取消关注的 tag',
        items: {
          type: 'string',
        },
        description: '取消关注的 tag',
        default: ['天选时刻', 'rp关注'],
        'ui:show-sort-button': false,
        'ui:widget': DynamicInput,
      },
    },
  };

  const dailyBatterySchema = {
    type: 'object',
    properties: {
      tasks: {
        type: 'array',
        title: '任务列表',
        default: ['5弹幕', '20弹幕', '20弹幕30秒观看'],
        items: {
          type: 'string',
          enum: ['5弹幕', '20弹幕', '20弹幕30秒观看'],
        },
      },
      delay: {
        type: 'array',
        title: '每次任务间隔时间',
        default: [8, 12],
        items: {
          type: 'number',
          minimum: 0,
        },
        'ui:widget': DynamicInputNumber,
      },
      delayByRoomid: {
        type: 'array',
        title: '重复获取到同一roomid时的等待时间（秒）',
        default: [10, 20],
        items: {
          type: 'number',
          minimum: 0,
        },
        'ui:widget': DynamicInputNumber,
      },
    },
  };

  const bigPointSchema = {
    type: 'object',
    properties: {
      isRetry: {
        type: 'integer',
        title: '重试等待时间（秒）',
        default: 20,
        description: '是否在完成后等待 20s 再检查一次，也可直接填写等待时间（单位秒）',
      },
      isWatch: {
        type: 'boolean',
        description: '是否完成观看视频的任务（模拟，不需要 30 分钟） ，会产生历史记录',
        title: '是否观看视频',
        default: true,
      },
      watchDelay: {
        type: 'integer',
        title: '领取任务后的观看延时',
        default: 40,
        description: '领取任务后的观看延时（秒），尝试用更长的时间解决观看视频没加积分的问题',
      },
    },
  };

  const exchangeBigPointSchema = {
    type: 'object',
    properties: {
      delay: {
        type: 'integer',
        title: '多次尝试间隔时间',
        description: '多次尝试间隔时间，单位 ms',
        default: 200,
      },
      retry: {
        type: 'integer',
        title: '重试次数',
        description: '重试次数',
        default: 3,
      },
      startDelay: {
        type: 'integer',
        title: '启动延时',
        description: '启动延时 ms，在 12 点之后相加 30 ms，（12点准时启动可能无法获取到信息）',
        default: 30,
      },
      name: {
        type: 'array',
        title: '兑换商品名称',
        default: [],
        description: '兑换商品名称，与 token 二选一',
        items: {
          type: 'string',
        },
        'ui:widget': DynamicInput,
      },
      token: {
        type: 'array',
        title: '兑换商品 token',
        description: '兑换商品 token，与 name 二选一',
        default: [],
        items: {
          type: 'string',
        },
        'ui:widget': DynamicInput,
      },
    },
  };

  const exchangeCouponSchema = {
    type: 'object',
    properties: {
      num: {
        title: '兑换漫读券数量',
        default: 1,
        type: 'integer',
        description: '兑换漫读券数量，小于 1 的数为根据积分确定',
      },
      delay: {
        title: '间隔时间',
        default: 2000,
        type: 'integer',
        description: '单位 ms，随机误差 -50 ~ 150',
      },
      keepAmount: {
        title: '保留积分数',
        default: 0,
        description: '保留积分数',
        type: 'integer',
      },
      startHour: {
        type: 'array',
        description: '兑换时间',
        title: '兑换开始时间',
        items: {
          type: 'integer',
        },
        'ui:widget': DynamicInputNumber,
      },
      multiNum: {
        title: '分多次兑换',
        type: 'integer',
        description: '分多次兑换，每次兑换的数量，（群友要求，但实际鸡肋甚至负作用）',
      },
    },
  };

  const redPackSchema = {
    type: 'object',
    properties: {
      source: {
        title: '直播间来源方式',
        default: 0,
        description:
          '直播间来源方式 1 活动（活动链接可能更新不及时），2 扫描。其它值 所有方式依次尝试。',
        type: 'integer',
      },
      uri: {
        description: '活动链接',
        title: '活动链接',
        type: 'string',
        default: '',
      },
      intervalActive: {
        title: '每轮抢红包的间隔时间',
        type: 'integer',
        default: 60,
        description: '【仅使用活动时有效】 每轮抢红包的间隔时间（秒）',
      },
      restTime: {
        type: 'array',
        description:
          ' 中场休息时间，当每参加了几个直播间的时候，休息一下 [参加个数，休息时间（分，小于1为直接结束）',
        default: [-1, -1],
        title: '中场休息时间',
        items: {
          type: 'integer',
        },
        'ui:show-sort-button': false,
        'ui:widget': DynamicInputNumber,
        'ui:max': 2,
        'ui:min': 0,
      },
      riskTime: {
        description:
          '疑似触发风控时休眠时间，[连续出现次数，休眠时间（分，小于1为直接结束）]。与 riskNum 不同，该参数会与 restTime 互相影响重置次数',
        type: 'array',
        default: [-1, -1],
        title: '疑似触发风控时休眠时间',
        items: {
          type: 'integer',
        },
        'ui:show-sort-button': false,
        'ui:widget': DynamicInputNumber,
        'ui:max': 2,
        'ui:min': 0,
      },
      linkRoomNum: {
        default: 1,
        description: '同时参与的直播间数量',
        title: '同时参与的直播间数量',
        type: 'integer',
      },
      totalNum: {
        default: -1,
        description: '总参与次数，达到后不管结果如何，直接结束',
        title: '总参与次数',
        type: 'integer',
      },
      dmNum: {
        type: 'array',
        default: [10],
        title: '参与直播时发送的弹幕数量',
        description:
          '参与直播时发送的弹幕数量（与内置数量比，min(10，剩余时间/5，配置)）。[固定值]，[最少,最多]',
        items: {
          type: 'integer',
        },
        'ui:show-sort-button': false,
        'ui:widget': DynamicInputNumber,
        'ui:max': 2,
        'ui:min': 0,
      },
      moveUpInWait: {
        default: true,
        description: '是否在等待时处理关注用户（读取消息，移动）',
        title: '是否在等待时处理关注用户',
        type: 'boolean',
      },
      moveTag: {
        default: 'rp关注',
        title: '移动到分组',
        description: '天选时刻关注 UP 移动到分组',
        type: 'string',
      },
      actFollowMsg: {
        type: 'string',
        default: 'read',
        description: '关注回复处理方式',
        enum: ['read', 'del', 'none'],
        enumNames: ['读取', '删除', '不处理'],
      },
      noWinNum: {
        description: '连续超过多少次没有中，直接结束，小于1为不限制',
        default: 10,
        title: '连续超过多少次没有中',
        type: 'integer',
      },
      riskNum: {
        title: '连续疑似触发风控多少次',
        default: 5,
        description: '连续疑似触发风控多少次，直接结束，小于1为不限制',
        type: 'integer',
      },
    },
  };

  const lotterySchema = {
    type: 'object',
    properties: {
      excludeAward: {
        description: '奖品描述不能包含，比如“自拍一张”将被跳过',
        title: '排除奖品',
        type: 'array',
        default: [
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
        items: {
          type: 'string',
        },
        'ui:show-sort-button': false,
        'ui:widget': DynamicTags,
      },
      includeAward: {
        description: '奖品描述包含，如果满足则跳过 排除',
        type: 'array',
        title: '包含奖品',
        default: ['谢'],
        items: {
          type: 'string',
        },
        'ui:show-sort-button': false,
        'ui:widget': DynamicTags,
      },
      blackUid: {
        description: 'up 黑名单（up 的 id，不是房间号）',
        title: 'up 黑名单',
        type: 'array',
        default: [65566781, 1277481241, 1643654862, 603676925],
        items: {
          type: 'integer',
        },
        'ui:show-sort-button': false,
        'ui:widget': DynamicTags,
      },
      moveTag: {
        description: '关注的用户统一移动到此',
        type: 'string',
        default: '天选时刻',
        title: '关注的用户统一移动到此',
      },
      pageNum: {
        description: '扫描几页直播间',
        title: '天选获取的直播页数',
        default: 2,
        type: 'integer',
      },
      actFollowMsg: {
        description: '关注时产生的回复的处理方式',
        type: 'string',
        title: '关注时产生的回复的处理方式',
        enum: ['read', 'del', 'none'],
        enumNames: ['读取', '删除', '不处理'],
      },
      scanFollow: {
        type: 'string',
        title: '扫描关注的用户',
        description:
          '扫描关注的用户，任意值则扫描，如果为 only 则只扫描关注用户，不会扫描直播分区。默认无值（不扫描）',
        enum: ['only', '不扫描'],
        enumNames: ['只扫描关注', '不扫描'],
        default: '不扫描',
      },
      skipNeedFollow: {
        description: '跳过条件为关注的天选时刻',
        title: '跳过条件为关注的天选时刻',
        type: 'boolean',
        default: false,
      },
      mayBeWinMsg: {
        description: '打印可能中奖的消息（48 小时内）',
        title: '打印可能中奖的消息',
        type: 'boolean',
        default: true,
      },
    },
  };

  const activityLotterySchema = {
    type: 'object',
    properties: {
      list: {
        type: 'array',
        description:
          '（非云函数不推荐在此配置，详见 PS）。自定义活动列表（如需使用，有效性请自行维护，不会删除过期配置），格式见 PS',
        title: '活动列表',
        default: [],
        items: {
          type: 'object',
        },
      },
      isRequest: {
        description: '是否从网络请求活动列表',
        type: 'boolean',
        title: '是否从网络请求活动列表',
        default: true,
      },
      delay: {
        description: '随机抽奖延时（秒），只用于单个活动中多次机会的间隔',
        type: 'array',
        title: '抽奖延时',
        default: [1.8, 3.2],
        items: {
          type: 'number',
          minimum: 0,
        },
        'ui:widget': DynamicInputNumber,
      },
      bangumi: {
        description:
          '	与 isRequest 配合，是否通过追番增加次数（如果有番剧/影视，追番然后取消，当然不一定能增加次数），云函数不建议开启（因为追番只能生效一次，但是云函数每次都会运行）',
        type: 'boolean',
        title: '追番？',
        default: false,
      },
      follow: {
        description: '同 bangumi，不过情况复杂，暂时没有完成预留在这里，可以先配置为 true 等更新',
        type: 'boolean',
        title: '关注？',
        default: false,
      },
      proxyPrefix: {
        type: 'string',
        title: '请求 GitHub 使用的代理前缀',
        description: '请求 GitHub 使用的代理前缀，例如 https://ghproxy.com/',
        default: 'https://ghproxy.com/',
      },
      customUrl: {
        description:
          '自定义活动列表链接。有自己的在线列表或者有使用前缀无法处理的链接都可以直接在此配置完整的。',
        type: 'string',
        title: '自定义活动列表链接',
        default: '',
      },
    },
  };

  const watchLinkSchema = {
    type: 'object',
    properties: {
      uid: {
        type: 'array',
        title: '用户 uid',
        description: '用户 uid，非直播间 id',
        default: [],
        items: {
          type: 'number',
        },
        'ui:widget': DynamicInputNumber,
      },
      roomid: {
        type: 'array',
        title: '直播间 id',
        description: '直播间 id，如果有值则 uid 不会有效',
        default: [],
        items: {
          type: 'number',
        },
        'ui:widget': DynamicInputNumber,
      },
      heart: {
        type: 'boolean',
        description: '直播心跳 api',
        title: '直播心跳',
        default: true,
      },
      time: {
        type: 'integer',
        description: '直播心跳时间，单位分',
        title: '直播心跳时间',
        default: 30,
      },
      wss: {
        type: 'boolean',
        description: '直播 wss 心跳',
        title: '直播 wss 心跳',
        default: false,
      },
      tcp: {
        type: 'boolean',
        description: '直播 tcp 心跳，与 wss 是一致的',
        title: '直播 tcp 心跳',
        default: false,
      },
      area: {
        type: 'array',
        title: '分区',
        description: '直播分区，例如 3,321 为手游-原神',
        default: [
          [3, 321],
          [3, 549],
        ],
        items: {
          type: 'array',
          default: [3, 321],
          items: {
            type: 'integer',
          },
        },
      },
    },
  };

  const liveDmSchema = {
    type: 'object',
    properties: {
      roomid: {
        type: 'array',
        description: '	直播间 id',
        title: '直播间 id',
        default: [],
        items: {
          type: 'number',
        },
        'ui:widget': DynamicInputNumber,
      },
      delay: {
        description: '延时，单位秒，例如 [8, 13] 为 8-13s 之间随机',
        type: 'array',
        title: '延时 s',
        default: [8, 13],
        items: {
          type: 'number',
          minimum: 0,
        },
        'ui:widget': DynamicInputNumber,
      },
      num: {
        type: 'integer',
        description: '次数',
        title: '次数',
        default: 0,
      },
      custom: {
        description: '自定义弹幕。当 custom 有值时，roomid 、num 会被忽略。',
        type: 'array',
        title: '自定义',
        default: [],
        items: {
          type: 'object',
          properties: {
            id: {
              title: '用户 uid',
              type: 'integer',
            },
            num: {
              type: 'integer',
              title: '次数',
              default: 1,
            },
            msg: {
              title: '信息',
              type: 'array',
              default: ['haha'],
              items: {
                type: 'string',
                default: 'haha',
              },
            },
          },
        },
      },
    },
  };

  const blinkSchema = {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        description: '直播间标题',
        title: '直播间标题',
        default: '',
      },
      parentId: {
        type: 'integer',
        description: '开播分区 parentId',
        title: '开播分区 parentId',
        default: 0,
      },
      areaId: {
        description: '开播分区 areaId',
        type: 'integer',
        title: '开播分区 areaId',
        default: 0,
      },
      roomid: {
        type: 'integer',
        description: '自己的直播间 id',
        title: '自己的直播间 id',
        default: 0,
      },
      time: {
        type: 'integer',
        description: '直播时间',
        title: '直播时间',
        default: 33,
      },
    },
  };

  const appSchema = {
    type: 'object',
    properties: {
      http: {
        type: 'object',
        properties: {
          build: {
            type: 'integer',
            description: 'App 版本号',
            default: '7370300',
          },
        },
      },
    },
  };

  const functionSchema = {
    type: 'object',
    properties: {
      silver2Coin: {
        type: 'boolean',
        title: '瓜子兑换硬币',
        default: true,
      },
      liveSignTask: {
        type: 'boolean',
        title: '直播签到',
        default: true,
      },
      addCoins: {
        type: 'boolean',
        title: '投币',
        default: true,
      },
      shareAndWatch: {
        type: 'boolean',
        title: '分享和观看',
        default: true,
      },
      supGroupSign: {
        type: 'boolean',
        title: '应援团签到',
        default: false,
      },
      useCouponBp: {
        type: 'boolean',
        title: '使用 b 币券',
        default: false,
      },
      getVipPrivilege: {
        type: 'boolean',
        title: '获取 vip 权益',
        default: false,
      },
      giveGift: {
        type: 'boolean',
        title: '直播赠送礼物',
        default: false,
      },
      matchGame: {
        type: 'boolean',
        title: '赛事竞猜',
        default: false,
      },
      liveLottery: {
        type: 'boolean',
        title: '直播天选时刻',
        default: false,
      },
      liveRedPack: {
        type: 'boolean',
        title: '直播天选红包',
        default: false,
      },
      batchUnfollow: {
        type: 'boolean',
        title: '批量取关',
        default: false,
      },
      liveIntimacy: {
        type: 'boolean',
        title: '粉丝牌等级',
        default: false,
      },
      mangaTask: {
        type: 'boolean',
        title: '漫画任务',
        default: false,
      },
      bigPoint: {
        type: 'boolean',
        title: '大会员积分',
        default: false,
      },
      judgement: {
        type: 'boolean',
        title: '风纪委员',
        default: false,
      },
      activityLottery: {
        type: 'boolean',
        title: '转盘抽奖',
        default: false,
      },
      dailyBattery: {
        type: 'boolean',
        title: '每日电池',
        default: false,
      },
      liveWeekTask: {
        type: 'boolean',
        title: '每日直播任务',
        default: false,
      },
      blink: {
        type: 'boolean',
        title: '直播',
        default: false,
      },
      watchLink: {
        type: 'boolean',
        title: '直播间心跳',
        default: false,
      },
      liveDm: {
        type: 'boolean',
        title: '直播弹幕',
        default: false,
      },
      addExp: {
        type: 'boolean',
        title: '大会员领取经验',
        default: true,
      },
    },
  };

  const limitSchema = {
    type: 'object',
    properties: {
      level6: {
        type: 'boolean',
        title: '获取经验限制为 6 级',
        default: true,
        description: '获取经验限制为 6 级',
      },
      coins5: {
        type: 'boolean',
        title: '投币限制为 5 颗',
        description: '投币限制为 5 颗',
        default: true,
      },
      buyMangaOnlyBeforeExpire: {
        type: 'boolean',
        description: '仅在漫画即将过期前购买漫画',
        title: '仅在漫画即将过期前购买漫画',
        default: true,
      },
    },
  };

  const messageSchema = {
    type: 'object',
    properties: {
      br: {
        type: 'string',
        title: '换行符',
        description: '主要配合 api 使用，有的 api 换行是\\n，有的是需要\\n\\n',
        default: '\n',
      },
      onlyError: {
        type: 'boolean',
        title: '仅错误时发送',
        default: false,
        description: '仅错误时发送',
      },
      email: {
        type: 'object',
        title: 'email',
        properties: {
          from: {
            type: 'string',
            description: '发件邮箱',
            title: 'host',
          },
          to: {
            type: 'string',
            description: '接收邮箱，默认 from 的值',
            title: 'host',
          },
          pass: {
            type: 'string',
            description: '发件邮箱的授权码',
            title: 'host',
          },
          host: {
            description: '发件邮箱服务器 smtp.163.com',
            type: 'string',
            title: '服务器',
          },
          port: {
            description: '端口号',
            type: 'integer',
            title: '端口号',
            default: 465,
          },
        },
      },
      pushplusToken: {
        type: 'string',
        title: 'pushplusToken',
        default: '',
      },
      api: {
        type: 'object',
        title: 'api',
        properties: {
          method: {
            type: 'string',
            title: 'method',
            default: 'POST',
            enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
          },
          headers: {
            type: 'object',
            title: 'headers',
            properties: {
              'Content-Type': {
                type: 'string',
                title: 'Content-Type',
                default: 'application/json',
                enum: [
                  'application/json',
                  'application/octet-stream',
                  'application/x-www-form-urlencoded',
                  'multipart/form-data',
                ],
              },
            },
          },
          timeout: {
            type: 'integer',
            title: 'timeout',
            default: 5000,
          },
          url: {
            type: 'string',
            title: 'url',
            description: 'url 必填，query 参数请直接拼接到 url 中',
            default: '',
          },
          proxy: {
            type: 'object',
            title: 'proxy',
            properties: {
              host: {
                type: 'string',
                title: 'host',
                default: '',
              },
              port: {
                type: 'integer',
                title: 'port',
                default: 443,
              },
              auth: {
                type: 'string',
                title: 'auth',
                default: '',
              },
            },
          },
          data: {
            type: 'object',
            title: 'data',
            'ui:field': MessageApiDataField,
          },
        },
      },
    },
  };

  const logSchema = {
    type: 'object',
    properties: {
      pushLevel: {
        type: 'string',
        title: '推送等级',
        default: 'verbose',
        description: '推送等级',
        enum: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'],
      },
      consoleLevel: {
        type: 'string',
        title: '打印等级',
        default: 'debug',
        description: '打印等级',
        enum: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'],
      },
      fileLevel: {
        type: 'string',
        title: '文件等级',
        default: 'debug',
        description: '文件等级',
        enum: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'],
      },
      useEmoji: {
        type: 'boolean',
        title: '使用 Emoji',
        default: true,
        description: '使用 Emoji',
      },
      fileSplit: {
        type: 'string',
        title: '文件分割方式',
        default: 'day',
        description: '文件分割方式',
        enum: ['day', 'month'],
        enumNames: ['按天', '按月'],
      },
    },
  };

  const baseSchema = {
    type: 'object',
    properties: {
      cookie: {
        type: 'string',
        title: 'cookie',
        description: '必填项 <a href="/config/get_value#必看">获取 Cookie 参考</a>',
        default: '',
        minLength: 60,
        'ui:options': {
          type: 'textarea',
          rows: 16,
        },
      },
      createCookieDay: {
        type: 'integer',
        title: '间隔指定时间创建新 cookie',
      },
      apiDelay: {
        type: 'array',
        title: '任务延时',
        description: '单位秒，区间中随机，或固定一个值（仅部分功能有效）',
        default: [2, 6],
        items: {
          type: 'integer',
        },
      },
      dailyRunTime: {
        type: 'string',
        title: 'dailyRunTime',
        default: '',
        minLength: 20,
        description: 'Serveless 随机运行的时间段',
      },
      userAgent: {
        type: 'string',
        title: 'userAgent',
        description: '浏览器用户代理，内置偶尔随机更新 （建议自行配置）',
        default: '',
        minLength: 20,
        'ui:options': {
          type: 'textarea',
          rows: 6,
        },
      },
    },
  };

  return ref({
    jurySchema,
    matchSchema,
    giftSchema,
    couponBalanceSchema,
    coinSchema,
    mangaSchema,
    intimacySchema,
    unFollowSchema,
    dailyBatterySchema,
    bigPointSchema,
    exchangeBigPointSchema,
    exchangeCouponSchema,
    redPackSchema,
    lotterySchema,
    activityLotterySchema,
    watchLinkSchema,
    blinkSchema,
    liveDmSchema,
    appSchema,
    functionSchema,
    limitSchema,
    messageSchema,
    logSchema,
    baseSchema,
  });
}
