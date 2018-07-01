'use strict';
const Controller = require('egg').Controller;
const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;
// const DEFAULTSCOREPAGESIZE = 20;

class UserController extends Controller {
    // UserController 由框架负责实例化以及构造时传参
    constructor(ctx) { // UserController 构造函数;
        super(ctx);
        this.userService = ctx.service.userService;
        // this.ctx.session.uid = 123; // 测试用
    }
    async getMyInfo() {
        const uid = this.ctx.user.id;

        uid || this.ctx.helper.createRes(403, 'User not login QAQ');
        const response = await this.userService.getInfo(uid);
        if (response) {
            this.ctx.body = response;
        } else {
            this.ctx.helper.createRes(404, 'User is not found QAQ');
        }
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
        if (this.ctx.user.id) {
            this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
        }
        const response = await this.userService.getUserCollection(uid, offset, pagesize, owned);
        this.ctx.body = response;
    }

    async getMyCollection() {
        // 获取session里的uid

        const uid = this.ctx.user.id;
        if (uid) {
            this.ctx.helper.createRes(404, 'User not find 凸(⊙▂⊙✖ )');
        }
        const {
            offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, owned = false,
        } = this.ctx.query;
        const response = await this.userService.getUserCollection(uid, offset, pagesize, owned);
        this.ctx.body = response;
    }
    async logout() {
        this.ctx.logout();
        this.ctx.body = 'success';
    }

    async addCollectionVolume() {
        const {
            vid,
        } = this.ctx.request.body;
        const uid = this.ctx.user.id;
        const response = await this.userService.addCollectionVolume(uid, vid);
        if (!response[response.length - 1]) { // check is new record
            this.ctx.helper.createRes(412, ' volume has been collected Orz');
        } else {
            this.ctx.helper.createRes(200, 'collection success QwQ');
        }
    }

    async deleteCollectionVolume() {
        const { vid } = this.ctx.params;
        const uid = this.ctx.user.id;
        const response = await this.userService.deleteCollectionVolume(uid, vid);
        if (response) {
            this.ctx.helper.createRes(200, 'Delete success QwQ');

        } else {
            this.ctx.helper.createRes(409, 'Delete err Orz  ');

        }
        this.ctx.body = response;
    }

}

module.exports = UserController;