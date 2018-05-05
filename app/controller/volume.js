'use strict';
const Controller = require('egg').Controller;

const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;
const DEFAULTSCOREPAGESIZE = 20;

class VolumeController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.VolumeService = ctx.service.VolumeService;
    }


    async getVolumeList() {
        const { uid } = this.ctx.params;
        const { offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, role = 'normal' } = this.ctx.query;
        const response = await this.userService.getVolumeList(uid, offset, pagesize, role);
        this.ctx.body = response;
    }

    async createVolume() {
        const { title, describe } = this.ctx.body;
        const response = await this.userService.getVolumeList(title, describe);
        this.ctx.body = response;

    }

    async editVolume() {
        const { title, describe } = this.ctx.body;
        const response = await this.userService.getVolumeList(title, describe);
        this.ctx.body = response;
    }

    async deleteVolume() {
        const { vid } = this.ctx.params;
        const response = await this.userService.deleteVolume(vid);
        this.ctx.body = response;
    }

    async getVolumeInfo() {
        const { vid } = this.ctx.params;
        const response = await this.userService.getVolumeInfo(vid);
        this.ctx.body = response;
    }

    async getVolumeScore() {
        const { vid } = this.ctx.params;
        const { offset = DEFAULTOFFSET, pagesize = DEFAULTSCOREPAGESIZE } = this.ctx.query;
        const response = await this.userService.getVolumeScore(vid, offset, pagesize);
        this.ctx.body = response;
    }

    async addVolumeScore() {
        const { vid, sid } = this.ctx.body;
        const response = await this.userService.addVolumeScore(uid, sid);
        this.ctx.body = response;
    }

    async deleteVolume() {
        const { vid, sid } = this.ctx.params;
        const response = await this.userService.deleteVolume(vid, sid);
        this.ctx.body = response;
    }

}

module.exports = UserController;