'use strict';
const Controller = require('egg').Controller;

const DEFAULTOFFSET = 0;
const DEFAULTVOLUMEPAGESIZE = 10;
const DEFAULTSCOREPAGESIZE = 20;

class VolumeController extends Controller {

    constructor(ctx) {
        super(ctx);
        this.VolumeService = ctx.service.volumeService;
        // this.ctx.session.uid = 123; // 测试用
    }
    async getVolumeList() {

        const { offset = DEFAULTOFFSET, pagesize = DEFAULTVOLUMEPAGESIZE, role = 'normal' } = this.ctx.query;
        const response = await this.VolumeService.getVolumeList(offset, pagesize, role);
        this.ctx.body = response;
    }

    async createVolume() {
        const {
            title,
            describe,
        } = this.ctx.request.body;
        const uid = this.ctx.user.id;
        // const uid = 123; //测试用
        const response = await this.VolumeService.createVolume(title, describe, uid);
        this.ctx.body = response;
    }

    async editVolume() {
        const {
            title,
            describe,
            url,

        } = this.ctx.request.body;
        const { vid } = this.ctx.params;
        const volume = await this.VolumeService.findOwner(vid);
        if (volume.get(uid) !== this.ctx.user.id) {
            this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
        }
        const response = await this.VolumeService.editVolume(vid, title, describe, url);
        this.ctx.body = response;
    }

    async deleteVolume() {
        const { vid } = this.ctx.params;
        const uid = this.ctx.user.id;

        const response = await this.VolumeService.deleteVolume(vid, uid);
        if (response) {
            this.ctx.helper.createRes(200, 'Delete success QwQ');

        } else {
            this.ctx.helper.createRes(409, 'Delete err Orz  ');

        }
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
        // console.log(response)
        this.ctx.body = response;



    }

    async addVolumeScore() {
        const {
            sid,
        } = this.ctx.request.body;
        const {
            vid,
        } = this.ctx.params;
        const volume = await this.VolumeService.findOwner(vid);

        if (volume.get('uid') !== this.ctx.user.id) {
            this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
        }
        const response = await this.VolumeService.addVolumeScore(vid, sid);
        this.ctx.body = response;
    }

    async deleteVolumeScore() {
        const { vid, sid } = this.ctx.params;
        const volume = await this.VolumeService.findOwner(vid);

        if (volume.get('uid') !== this.ctx.user.id) {
            this.ctx.helper.createRes(403, 'permission denied ಠ益ಠ');
        }
        const response = await this.VolumeService.deleteVolumeScore(vid, sid);
        this.ctx.body = response;
    }
    async getComment() {
        const {
            vid,
        } = this.ctx.params;
        const response = await this.VolumeService.getComment(vid);
        this.ctx.body = response;
    }
    async addComment() {
        const {
            vid,
        } = this.ctx.params;

        const {
            replyid,
            text,
            targetid
        } = this.ctx.request.body;
        const uid = this.ctx.user.id;

        let response;
        if (replyid) {
            response = await this.VolumeService.addCommentToComment(replyid, text, uid, targetid);
        } else {
            response = await this.VolumeService.addCommentToVolume(vid, text, uid);
        }

        this.ctx.body = response;
    }
    async delectComment() {
        const {
            cid,
        } = this.ctx.params;
        const response = await this.VolumeService.delectComment(cid);
        this.ctx.body = response;
    }
    async delectSubcomment() {
        const {
            cid,
        } = this.ctx.params;
        const response = await this.VolumeService.delectSubcomment(cid);
        this.ctx.body = response;
    }
}

module.exports = VolumeController;