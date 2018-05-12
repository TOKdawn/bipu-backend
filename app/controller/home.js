'use strict';
const fs = require('fs');
const Controller = require('egg').Controller;
const path = require('path');
class HomeController extends Controller {
  async index() {
    this.ctx.set('Content-Type', 'text/html');
    this.ctx.body = await fs.readFileSync(path.resolve(__dirname, '../view/text.html'));
  }
}

module.exports = HomeController;
