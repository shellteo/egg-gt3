# egg-gt3

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/egg-gt3.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-gt3
[travis-image]: https://img.shields.io/travis/shellteo/egg-gt3.svg?style=flat-square
[travis-url]: https://travis-ci.org/shellteo/egg-gt3
[codecov-image]: https://img.shields.io/codecov/c/github/shellteo/egg-gt3.svg?style=flat-square
[codecov-url]: https://codecov.io/github/shellteo/egg-gt3?branch=master
[david-image]: https://img.shields.io/david/shellteo/egg-gt3.svg?style=flat-square
[david-url]: https://david-dm.org/shellteo/egg-gt3
[snyk-image]: https://snyk.io/test/npm/egg-gt3/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-gt3

## Install

> npm i egg-gt3 --save

## Usage

```js
// {app_root}/config/plugin.js
exports.geetest = {
  enable: true,
  package: 'egg-gt3',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.geetest = {
  geetest_id: '',
  geetest_key: '',
};
```

## Example

```js
// {app_root}/app/router.js
// api添加geetest拦截校验，errorMsg[可选项]为自定义错误返回值，校验错误默认返回{ code: -1, error }
router.post('/a', app.middleware.geetest(app[, errorMsg]), controller.home.a);

// geetest注册
this.ctx.geetest.register(data, callback);

// geetest校验
this.ctx.geetest.validate(fallback, result, callback)
```

```js
// 前端注册初始化geetest，cb为callback，传人校验成功发送的真正请求
function registerInitGT(cb) {
  API.registerGT().then(res => {
    window.initGeetest({
      // 以下 4 个配置参数为必须，不能缺少
      gt: res.gt,
      challenge: res.challenge,
      offline: !res.success, // 表示用户后台检测极验服务器是否宕机
      new_captcha: res.new_captcha, // 用于宕机时表示是新验证码的宕机
      product: "bind", // 产品形式，包括：float，popup
      width: "300px"
      // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
    }, (captchaObj) => {
      this.captchaObj = captchaObj;
      captchaObj.onReady(() => {
        captchaObj.verify();
      }).onSuccess(() => {
        const result = captchaObj.getValidate();
        if (result){
          cb(result);
        }
      });
    });
  })
}
// 发送校验码
function confirmSendCode(gt) {
  const { geetest_challenge, geetest_validate, geetest_seccode } = gt;
  API.getCaptcha(email, {
    geetest_challenge,
    geetest_validate,
    geetest_seccode
  }).then(res => {
  })
}
// 使用
registerInitGT(confirmSendCode)
```


## Questions & Suggestions

Please open an issue [here](https://github.com/shellteo/egg-gt3/issues).

## License

[MIT](LICENSE)
