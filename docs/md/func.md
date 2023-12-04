**注意：**

- 只有将这些值设置为 `true` 才会生效，如果设置为 `false` ，具体的配置再怎么样也不会去执行，下表为了明了，默认值 `false` 直接省略。
- 表中排列顺序即为功能的调用顺序，内部设置顺序，与配置无关。
- 带删除线的表示已经弃用或其它原因不使用，如果有替代的功能，查看说明。
- 替代功能的相关配置开启时会自动关闭原废弃功能，防止重复运行，但是任然建议将废弃功能删除。

| Key              | 默认值 | 说明                                          | 配置                                |
| ---------------- | ------ | --------------------------------------------- | ----------------------------------- |
| loginTask        | `true` | 获取个人信息（一般会自动调用，且无法关闭）    | 不可配置                            |
| exchangeBigPoint |        | 大积分兑换 （~~暂时~~只能通过指定 task 运行） | [点击](/config/func.md#大积分兑换)  |
| exchangeCoupon   |        | 兑换漫读券 （~~暂时~~只能通过指定 task 运行） | [点击](/config/func.md#兑换漫读券)  |
| liveSignTask     | `true` | 直播间签到                                    | 无                                  |
| addCoins         | `true` | 投币                                          | [点击](/config/func.md#投币)        |
| bigPoint         |        | 大会员领取大积分                              | [点击](/config/func.md#大积分)      |
| shareAndWatch    | `true` | 观看和分享视频                                | 无                                  |
| silver2Coin      | `true` | 银瓜子兑换硬币（配合直播签到用）              | 无                                  |
| mangaTask        |        | 漫画任务（包含签到，分享，阅读，小游戏）      | [点击](/config/func.md#漫画任务)    |
| supGroupSign     |        | 应援团签到 （目前也无意义了啊）               | 无                                  |
| getVipPrivilege  |        | 获取大会员权益                                | 无                                  |
| useCouponBp      |        | 使用 b 币券（充电/兑换电池）                  | [点击](/config/func.md#使用-b-币券) |
| matchGame        |        | 赛事竞猜（人人都是硬币慈善家）                | [点击](/config/func.md#竞猜)        |
| giveGift         |        | 赠送过期礼物                                  | [点击](/config/func.md#直播间礼物)  |
| liveIntimacy     |        | 牌子亲密度 （非云函数为异步运行）             | [点击](/config/func.md#粉丝亲密度)  |
| liveDm           |        | 直播弹幕                                      | [点击](/config/func.md#直播弹幕)    |
| watchLink        |        | 直播心跳/直播间监听                           | [点击](/config/func.md#直播心跳)    |
| batchUnfollow    |        | 取消关注                                      | [点击](/config/func.md#取关分组)    |
| ~~liveLottery~~  |        | ~~直播天选时刻~~（黑号风险）                  | [点击](/config/func.md#天选时刻)    |
| liveRedPack      |        | 直播天选红包                                  | [点击](/config/func.md#每日电池)    |
| dailyBattery     |        | 每日电池任务                                  | [点击](/config/func.md#天选红包)    |
| addExp           | `true` | 大会员领取经验                                |                                     |
| activityLottery  |        | 转盘抽奖                                      | [点击](/config/func.md#转盘抽奖)    |
| judgement        |        | 风纪委员                                      | [点击](/config/func.md#风纪委员)    |
| ~~liveWeekTask~~ |        | 直播周任务                                    |                                     |
| ~~blink~~        |        | 直播                                          |                                     |
