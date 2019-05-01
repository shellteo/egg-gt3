'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.eggGt3.name;
  }
  async home() {
    const { app } = this;
    const data = await app.geetest.register();
    const { challenge, ...rest } = data;
    this.logger.info('challenge', challenge);
    this.ctx.body = rest;
  }
  async intercept() {
    this.ctx.body = '1234';
  }
}

module.exports = HomeController;
