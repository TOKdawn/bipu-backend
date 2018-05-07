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
        // console.log(this.ctx.model);

        const user = await this.User.findOne({
            where: {
                id: uid
            }
        });
        console.log(user);
        return user;
    }
    async getUserCollection(uid, offset, pagesize, owned) {
        // this.Volume.belongsTo(this.CollectionVolume, { foreignKey: 'vid', sourceKey: 'id' });
        const data = await this.Volume.findAll({
            // attributes: ['vid', 'uid'],
            where: {
                id: {
                    $in: this.app.Sequelize.literal(
                        '(SELECT vid FROM "collectionVolume" WHERE uid = ' + uid + ')'
                    )
                }
            }
        });
        console.log(data)
        return data;
    }
}

module.exports = UserService;