'use strict';

module.exports = (app, options) => {
  return async (ctx, next) => {
    try {
      const { geetest_challenge, geetest_validate, geetest_seccode } = ctx.request.body;
      const gtResult = await app.geetest.validate({
        geetest_challenge,
        geetest_validate,
        geetest_seccode,
      });
      if (!gtResult) {
        ctx.logger.info(`[middleware geetest] geetest validate failed: ${gtResult}`);
        const errorMsg = options || {
          code: -1,
          error: gtResult,
        };
        ctx.body = errorMsg;
      } else {
        await next();
      }
    } catch (error) {
      ctx.logger.info(`[middleware geetest] geetest validate failed: ${error}`);
      const errorMsg = options || {
        code: -1,
        error,
      };
      ctx.body = errorMsg;
    }
  };
};
