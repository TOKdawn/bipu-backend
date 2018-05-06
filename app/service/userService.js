// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
    async getInfo(uid) {
        const user = await this.ctx.model.UserModel.findOne({
            where: {
                uid: uid
            }
        });
        return user;
    }
}

module.exports = UserService;