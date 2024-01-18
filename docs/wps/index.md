---
---

## 支持功能

- [x] bilibili 漫画每日签到/分享/阅读
- [x] ~~bilibili 漫画每日抢券~~

## 源码地址

[Github](https://github.com/catlair/BiliOutils/tree/dev/wps)

[Gitee](https://gitee.com/catlair/BiliOutils/tree/dev/wps)

## 食用方法

### 注册金山文档

注册并登录

https://www.kdocs.cn/

### 保存模板表格

访问以下模板：

【金山文档】 漫画签到-模板 https://kdocs.cn/l/cuQrjaKqKg87

保存模板：

<n-image src="/images/wps-save.png" alt="wps-save" />

### 复制 cookie

如果会抓包请忽略以下方式

[电脑获取 cookie 的方法](/config/get_value#pc-获取-cookie-的方法)

[手机获取 cookie 的方法](/config/get_cookie_mobile)

一定要获取到‘类似’这样的字符串哦，后面有用

```txt
_uuid=D2282D0F-257B-845A-BDF5-C770ED288F4001440infoc; buvid3=BF17608E-FB87-4F49-A922-56FD2E284D6F18534infoc;
fingerprint=5502cd4fe9637738de04bd9c3d1bdbc5;
buvid_fp=BF17608E-FB87-4F49-A922-56FD2E284D6F18534infoc;
SESSDATA=21607773%2C1631089673%2C71a42%2A31; bili_jct=dd92c55a6d67041ce2f3fb1650889ea8;
DedeUserID=12324234243817316; DedeUserID__ckMd5=47d541f04b605da9;
sid=ivie73r8; fingerprint3=792b32adfecbe31a4aca53ab7be1ad76;
fingerprint_s=bb6736758e7344a295c2ed6070cc642e;
buvid_fp_plain=BF17608E-FB87-4F49-A922-56FD2E284D6F18534infoc;
CURRENT_FNVAL=80; blackside_state=1; rpdid=|(kmJYYJ)lkR0J'uYu)llkJYJ; _dfcaptcha=a46d7562a42065d43a88c053e283e876;
LIVE_BUVID=AUTO8016188357987702; bsource=search_baidu; PVID=2
```

### 配置

填写后记得保存

<n-image src="/images/wps-config.png" alt="wps-config" />

兑换脚本只能在第二行配置（不支持多账号

签到脚本可以在任意行配置，且可以配置任意个（支持多账号

### 测试运行

点击菜单栏的效率 -> 高级开发 -> AirScript 脚本编辑器 -> 文件共享脚本 -> 点击指定的脚本 -> 点击三角符号运行

<n-image src="/images/wps-airscript.png" alt="wps-airscript" />

如果出现授权请同意

<n-image src="/images/wps-ver.png" alt="wps-ver" />

查看日志

<n-image src="/images/wps-log.png" alt="wps-log" />

### 定时运行

前面的测试运行成功后就可以使用定时运行，这样每天都会自动帮你运行了。

点击菜单栏的效率 -> 高级开发 -> 定时任务 -> 点击右边的创建任务

<n-image src="/images/wps-create-task.png" alt="wps-create-task" />

- 触发时间：按需。签到的话每天，兑换看你咯。
- 具体触发时间：签到几点钟签都无所谓，最好不要 0 点。兑换的话根据你前面配置时的‘兑换时间’决定，0 点/10 点/12 点中对应的那个。
- 执行脚本：签到就选签到，兑换就选兑换
- 最后点击蓝色的确定

<n-image src="/images/wps-create-task-time.png" alt="wps-create-task-time" />

看到这就创建成功了 🎉🎉🎉

<n-image src="/images/wps-task.png" alt="wps-task" />

## 注意

Cookie 是你的登录凭证，当表格填写好 Cookie 后请不要分享你的表格。避免 Cookie 泄露造成不必要的财产损失。

::: tip
图示效果并非最终结果，本人不对你的任何运行结果负责
:::
