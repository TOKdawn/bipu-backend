'use strict';
// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.CollectionVolume = this.ctx.model.CollectionVolume;
    this.User = this.ctx.model.User;
    this.Volume = this.ctx.model.Volume;
  }
  async getInfo(uid) {
    if (!uid) return { error: true, message: 'uid is not exist' };
    // console.log(this.ctx.model);
    const user = await this.User.findOne({
      where: {
        id: uid,
      },
    });
    // console.log(user);
    return user;
  }
  async getUserCollection(uid, offset, pagesize, owned) {
    // this.Volume.belongsTo(this.CollectionVolume, { foreignKey: 'vid', sourceKey: 'id' });
    const tablename = !owned ? 'collectionVolume' : 'ownVolume';
    const data = await this.Volume.findAll({
      // attributes: ['vid', 'uid'],
      where: {
        id: {
          $in: this.app.Sequelize.literal(
            `(SELECT vid FROM "${tablename}" WHERE uid = ${uid})`
          ),
        },
      },
      limit: pagesize,
      offset,
    });
    // console.log(data)
    return data;
  }
  async addCollectionVolume(uid, vid) {
    const data = await this.CollectionVolume.findOrCreate({
      where: {
        uid,
        vid,
      },
    });
    return data;
  }
  async deleteCollectionVolume(uid, vid) {
    // const Op = this.app.Sequelize.Op
    const data = await this.CollectionVolume.destroy({
      where: {
        uid,
        vid,
      },
    });
    // console.log(data);
    return data;
  }
}

module.exports = UserService;
