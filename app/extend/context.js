'use strict';

module.exports = {
  /**
   * geetest Singleton instance
   * @member Context#geetest
   * @since 1.0.0
   * @see App#geetest
   */
  get geetest() {
    return this.app.geetest;
  },
};
