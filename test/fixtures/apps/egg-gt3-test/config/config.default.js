'use strict';

exports.keys = '123456';

exports.geetest = {
  client: {
    geetest_id: 'f33f6032bd0975aaab21e49e6c76aa3d',
    geetest_key: 'be92a7a4f9901d66df096cbe4cd4320b',
  },
};
exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
  // domainWhiteList: [ '' ],
};
exports.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};
