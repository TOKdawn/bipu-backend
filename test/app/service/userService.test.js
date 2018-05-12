'use strict';

const assert = require('assert');
const mock = require('egg-mock');
describe('test/app/service/userService.test.js', () => {
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
  describe('User', () => {
    before(async function() {
      await ctx.model.User.bulkCreate([{
        id: 123,
        name: 'Dawn123',
        avatar: 'www.baidu,com',
        signature: '情之所钟,正在我辈',
        role: 1,
        created_at: '2018-05-05T06:38:16.498Z',
        updated_at: '2018-05-05T06:38:16.498Z',
      }, {
        id: 124,
        name: 'Dawn124',
        avatar: 'www.baidu,com',
        signature: '情之所钟,正在我辈',
        role: 1,
        created_at: '2018-05-05T06:38:16.498Z',
        updated_at: '2018-05-05T06:38:16.498Z',
      }, {
        id: 125,
        name: 'Dawn125',
        avatar: 'www.baidu,com',
        signature: '情之所钟,正在我辈',
        role: 0,
        created_at: '2018-05-05T06:38:16.498Z',
        updated_at: '2018-05-05T06:38:16.498Z',
      }]);

    });
    after(async function() {
      await ctx.model.sync({
        force: true,
      });
    });

    it('test get userinfo', async function() {
      const data = await ctx.service.userService.getInfo(123);
      assert(data.get('id') === 123); // 判断测试通过的判定条件
      assert(data.get('name') === 'Dawn123');
    });
    it('uid is not exist', async function() {
      const data = await ctx.service.userService.getInfo(

      );

      assert(data.error === true);

    });

  });

});
