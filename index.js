'use strict';

const assert = require('assert');

module.exports = app => {
  app.addSingleton('geetest', createGeetest);
};

function createGeetest(config, app) {
  const Geetest = app.config.geetest.Geetest || require('gt3-sdk');
  assert(config.geetest_id && config.geetest_key, '[egg-gt3] geetest_id and geetest_key is required');
  const { geetest_id, geetest_key } = config;
  const instance = new Geetest({ geetest_id, geetest_key });
  return instance;
}
