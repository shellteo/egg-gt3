'use strict';

module.exports = app => {
  const { router, controller } = app;
  const errorMsg = { code: -1, message: 'geetest test failed' };

  router.get('/', controller.home.index);
  router.get('/home', controller.home.home);
  router.post('/intercept', app.middleware.geetest(app, errorMsg), controller.home.intercept);
};
