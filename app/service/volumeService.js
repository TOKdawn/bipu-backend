'use strict';
// app/service/user.js
const Service = require('egg').Service;
// const Github = require('../extend/application');
class VolumeService extends Service {
    constructor(ctx) {
        super(ctx);
        this.CollectionVolume = this.ctx.model.CollectionVolume;
        this.User = this.ctx.model.User;
        this.Volume = this.ctx.model.Volume;
        this.Comment = this.ctx.model.Comment;
        this.OwnVolume = this.ctx.model.OwnVolume;
        this.SoreVolume = this.ctx.model.SoreVolume;
        this.SubComment = this.ctx.model.SubComment;
    }
    async createVolume(title, describe, uid) {
        // console.log(this.app.model.sequelize)
        const t = await this.ctx.model.transaction();
        try {
            const data = await this.Volume.create({
                title,
                describe,
            });
            console.log(data.get('id'));
            await this.OwnVolume.create({
                uid,
                vid: data.get('id'),
            });
            await this.CollectionVolume.create({
                uid,
                vid: data.get('id'),
            });
            await t.commit();
            return data;
        } catch (err) {
            await t.rollback();
            return err;
        }
    }
    async editVolume(id, title, describe, url) {
        const data = await this.Volume.update({
            title,
            describe,
            photo: url,
        }, {
            where: {
                id,
            },
        });
        return data;
    }
    async deleteVolume(vid, uid) {
        const t = await this.ctx.model.transaction();
        try {
            const dele = await this.OwnVolume.destroy({
                where: {
                    uid,
                    vid,
                },
            });
            await this.Volume.update({
                status: 2,
            }, {
                where: {
                    id: vid,
                },
            });
            await t.commit();
            return dele;
        } catch (err) {
            await t.rollback();
            return err;
        }
    }
    async getVolumeInfo(vid) {
        const Volume = await this.Volume.findOne({
            where: {
                id: vid,
            },
        });
        return Volume;
    }
    async addVolumeScore(vid, sid) {
        const data = await this.SoreVolume.findOrCreate({
            where: {
                sid,
                vid,
            },
        });
        return data;
    }
    async deleteVolumeScore(vid, sid) {
        const data = await this.SoreVolume.destroy({
            where: {
                vid,
                sid,
            },
        });
        // console.log(data);
        return data;
    }

    async getVolumeScore(vid, offset, pagesize) {
        const data = await this.SoreVolume.findAll({
            // attributes: ['vid', 'uid'],
            where: {
                vid,
            },
            limit: pagesize,
            offset,
        });
        // console.log(data)
        let tiem;
        const result = [];
        for (tiem in data) {
            const temp = await this.ctx.helper.getIssue(data[tiem].get('sid'));
            result.push(temp);
        }
        return result;
    }
    async addCommentToComment(id, text, uid, targetid) {
        const data = await this.SubComment.create({
            targetid,
            uid,
            text,
            comment_id: id
        });
        return data;


    }
    async addCommentToVolume(id, text, uid) {

        console.log(uid, id, text)
        const data = await this.Comment.create({
            volume_id: id,
            uid,
            text,
        });
        return data;


    }
    async getComment(vid) {
        this.Volume.hasMany(this.Comment);
        this.Comment.hasMany(this.SubComment)
        const data = await this.Volume.findOne({
            include: [{
                model: this.Comment,
                all: true,
                require: false,
                include: {
                    model: this.SubComment,
                    all: true,
                    require: false
                }
            }],
            where: {
                id: vid
            }
        })
        return data;
    }
    async delectComment(cid) {
        await this.Comment.update({
            status: 2,
        }, {
            where: {
                id: cid,
            },
        });
    }
    async delectSubcomment(cid) {
        await this.SubComment.update({
            status: 2,
        }, {
            where: {
                id: cid,
            },
        });
    }
}

module.exports = VolumeService;