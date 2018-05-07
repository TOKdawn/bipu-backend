'use strict';
const Controller = require('egg').Controller;
const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;
// const DEFAULTSCOREPAGESIZE = 20;

class UserController extends Controller {
    //UserController 由框架负责实例化以及构造时传参
    constructor(ctx) { //UserController 构造函数;
        super(ctx);
        this.userService = ctx.service.userService;
    }

    async getInfo() {
        const { uid } = this.ctx.params; // 等价于 const uid = this.ctx.params.uid;
        const response = await this.userService.getInfo(uid);
        if (response) {
            this.ctx.body = response;
        } else {
            this.ctx.helper.createRes(404, 'User is not found QAQ');

        }
    }

    async getUserCollection() {
        const { uid } = this.ctx.params;
        const { offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, owned = false } = this.ctx.query;
        const response = await this.userService.getUserCollection(uid, offset, pagesize, owned);
        this.ctx.body = response;
    }

    async getMyCollection() {
        // 获取session里的uid
        const { uid } = this.ctx.session;
        const response = await this.userService.getUserCollection(uid);
        this.ctx.body = response;
    }

    async addCollectionVolume() {
        const { vid } = this.ctx.body;
        const response = await this.userService.addCollectionVolume(vid);
        this.ctx.body = response;
    }

    async deleteCollectionVolume() {
        const { vid } = this.ctx.params;
        const response = await this.userService.deleteCollectionVolume(vid);
        this.ctx.body = response;
    }

}

module.exports = UserController;