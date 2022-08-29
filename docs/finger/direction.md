## node.js 串口
> `nw.js` + `SerialPort`  使用`SerialPort`与指纹识别机进行串口连接 识别
### 缺点
该库安装较为麻烦，npm容易与其他库产生冲突，但下载`SerialPort`源码替换即可
<hr>

## WebAuthn (推荐)
在windows与win7上通过Chrome浏览器测试成功，测试网站 [测试网站](https://webauthn.org)
> 通过`js` 或者`其他语言` 调用`WebAuthn`的接口，实现验证、注册、登录的功能 

Chrome可以使用那么也可以在我们的客户端nw.js进行登录验证\
但需点击按钮触发事件后，才可以进行登陆验证
### 协议支持
[点击查看浏览器支持版本](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API#browser_compatibility)

`WebAuthn` 支持`java`、`python`、`js`
<hr>

## 其他语言
购买设备 通过串口进行通信来进行登录验证