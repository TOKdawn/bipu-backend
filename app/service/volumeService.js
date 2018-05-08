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
        // const data = await this.Volume.create({
        //     title,
        //     describe,
        // });
        console.log(this.app.model.sequelize)
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
        // async getUserCollection(uid, offset, pagesize, owned) {
        //     // this.Volume.belongsTo(this.CollectionVolume, { foreignKey: 'vid', sourceKey: 'id' });
        //     const tablename = !owned ? 'collectionVolume' : 'ownVolume';
        //     const data = await this.Volume.findAll({
        //         // attributes: ['vid', 'uid'],
        //         where: {
        //             id: {
        //                 $in: this.app.Sequelize.literal(
        //                     `(SELECT vid FROM "${tablename}" WHERE uid = ${uid})`
        //                 )
        //             }
        //         },
        //         limit: pagesize,
        //         offset
        //     });
        //     // console.log(data)
        //     return data;
        // }
        // async addCollectionVolume(uid, vid) {
        //     const data = await this.CollectionVolume.findOrCreate({
        //         where: {
        //             uid,
        //             vid
        //         }
        //     })
        //     return data;
        // }
        // async deleteCollectionVolume(uid, vid) {
        //     // const Op = this.app.Sequelize.Op
        //     const data = await this.CollectionVolume.destroy({
        //             where: {
        //                 uid: uid,
        //                 vid: vid
        //             }
        //         })
        //         // console.log(data);
        //     return data;
        // }
    }
}

module.exports = VolumeService;