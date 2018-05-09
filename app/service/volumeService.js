// app/service/user.js
const Service = require('egg').Service;

class VolumeService extends Service {
    constructor(ctx) {
        super(ctx);
        this.CollectionVolume = this.ctx.model.CollectionVolume;
        this.User = this.ctx.model.User;
        this.Volume = this.ctx.model.Volume;
        this.Comment = this.ctx.model.Comment;
        this.OwnVolume = this.ctx.model.OwnVolume;
        this.SoreVolume = this.ctx.model.SoreVolume;
    }
    async createVolume(title, describe, uid) {
        // console.log(this.app.model.sequelize)
        const t = await this.ctx.model.transaction();
        try {
            const data = await this.Volume.create({
                title,
                describe
            });
            console.log(data.get('id'))
            await this.OwnVolume.create({
                uid: uid,
                vid: data.get('id')
            });
            await this.CollectionVolume.create({
                uid: uid,
                vid: data.get('id')
            })
            await t.commit();
            return data;
        } catch (err) {
            await t.rollback();
            return err
        }
    }
    async editVolume(id, title, describe, url) {
        const data = await this.Volume.update({
            title,
            describe,
            photo: url
        }, {
            where: {
                id
            }
        })
    }
    async deleteVolume(vid, uid) {
        const t = await this.ctx.model.transaction();
        try {
            const dele = await this.OwnVolume.destroy({
                where: {
                    uid,
                    vid
                }
            })
            const data = await this.Volume.update({
                status: 2
            }, {
                where: {
                    id: vid
                }
            })
            await t.commit();
            return dele;
        } catch (err) {
            await t.rollback();
            return err
        }
    }
    async getVolumeInfo(vid) {
        const Volume = await this.Volume.findOne({
            where: {
                id: vid
            }
        });
        return Volume;
    }
    async addVolumeScore(vid, sid) {
        const data = await this.SoreVolume.findOrCreate({
            where: {
                sid,
                vid
            }
        })
        return data;
    }
    async deleteVolumeScore(vid, sid) {
        const data = await this.SoreVolume.destroy({
                where: {
                    vid,
                    sid
                }
            })
            // console.log(data);
        return data;
    }

}

module.exports = VolumeService;