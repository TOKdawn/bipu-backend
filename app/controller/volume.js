'use strict';
const Controller = require('egg').Controller;

const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;
const DEFAULTSCOREPAGESIZE = 20;

class VolumeController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.VolumeService = ctx.service.volumeService;
        this.ctx.session.uid = 123;
    }


    async getVolumeList() {
        const { uid } = this.ctx.params;
        const { offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, role = 'normal' } = this.ctx.query;
        const response = await this.VolumeService.getVolumeList(uid, offset, pagesize, role);
        this.ctx.body = response;
    }

    async createVolume() {
        const {
            title,
            describe
        } = this.ctx.request.body;
        const {
            uid
        } = this.ctx.session;
        const response = await this.VolumeService.createVolume(title, describe, uid);
        this.ctx.body = response;
    }

    async editVolume() {
        const {
            title,
            describe,
            url

        } = this.ctx.request.body;
        const { vid } = this.ctx.params
        const response = await this.VolumeService.editVolume(vid, title, describe, url);
        this.ctx.body = response;
    }

    async deleteVolume() {
        const { vid } = this.ctx.params;
        const {
            uid
        } = this.ctx.session;
        const response = await this.VolumeService.deleteVolume(vid, uid);
        this.ctx.body = response;
    }

    async getVolumeInfo() {
        const { vid } = this.ctx.params;
        const response = await this.VolumeService.getVolumeInfo(vid);
        this.ctx.body = response;
    }

    async getVolumeScore() {
        const { vid } = this.ctx.params;
        const { offset = DEFAULTOFFSET, pagesize = DEFAULTSCOREPAGESIZE } = this.ctx.query;
        const response = await this.VolumeService.getVolumeScore(vid, offset, pagesize);
        this.ctx.body = response;
    }

    async addVolumeScore() {
        const {
            vid,
            sid
        } = this.ctx.request.body;
        const response = await this.VolumeService.addVolumeScore(uid, sid);
        this.ctx.body = response;
    }

    async deleteVolume() {
        const { vid, sid } = this.ctx.params;
        const response = await this.VolumeService.deleteVolume(vid, sid);
        this.ctx.body = response;
    }

    async deleteVolumeScore() {
        const { vid, uid } = this.ctx.params;;
        const response = await this.VolumeService.deleteVolumeScore(vid, uid);
        this.ctx.body = response;
    }

}

module.exports = VolumeController;