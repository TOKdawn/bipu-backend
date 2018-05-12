'use strict';

const mock = require('egg-mock');

describe('test/app/controller/user.test.js', () => {
  let app;
  let ctx;
  before(async function() {
    app = mock.app();
    await app.ready();
    ctx = app.mockContext();
    await ctx.model.sync({
      force: true,
    });
  });
  describe('posts()', () => {
    beforeEach(async function() {
      /* eslint-disable no-unused-vars */
      app.mockService('userService', 'getInfo', async function(uid) {
        console.log(uid);
        if (uid === '123') {
          return Promise.resolve({
            id: 123,
            name: 'Dawn123',
            avatar: 'www.baidu,com',
            signature: '情之所钟,正在我辈',
            role: 1,
            created_at: '2018-05-05T06:38:16.498Z',
            updated_at: '2018-05-05T06:38:16.498Z',
          });
        }
        const error = new Error('user not found');
        error.status = 404;
        throw error;
      });
      ctx = app.mockContext();
    });
    afterEach(function() {
      mock.restore();
    });
    it('should success', async function() {
      await app.httpRequest()
        .get('/user/123')
        .expect(200)
        .expect({
          id: 123,
          name: 'Dawn123',
          avatar: 'www.baidu,com',
          signature: '情之所钟,正在我辈',
          role: 1,
          created_at: '2018-05-05T06:38:16.498Z',
          updated_at: '2018-05-05T06:38:16.498Z',
        });
    });
    it('should 404', async function() {
      await app.httpRequest()
        .get('/user/222')
        .expect(404);
    });
  });


});
