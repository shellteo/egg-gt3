'use strict';

const mock = require('egg-mock');

describe('test/egg-gt3.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-gt3-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggGt3')
      .expect(200);
  });

  it('should GET /home', () => {
    return app.httpRequest()
      .get('/home')
      .expect(200)
      .expect({
        success: 1,
        gt: 'f33f6032bd0975aaab21e49e6c76aa3d',
        new_captcha: true,
      });
  });

  it('should intercept /intercept', () => {
    return app.httpRequest()
      .post('/intercept')
      .type('application/json')
      .send({
        geetest_challenge: '',
        geetest_validate: '',
        geetest_seccode: '',
      })
      .expect(200)
      .expect({
        code: -1,
        message: 'geetest test failed',
      });
  });
});
