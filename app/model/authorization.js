// 用户收藏谱册表

'use strict';

module.exports = app => {
    const {
        INTEGER,
        STRING
    } = app.Sequelize;
    const authorizationModel = app.model.define('Authorization', {
        id: {
            type: INTEGER(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        provider: { //第三方
            type: STRING(20),
            allowNull: false,

        },
        token: {
            type: STRING(200),
            allowNull: false,
        },
        uid: {
            type: INTEGER(20),
            allowNull: false,
        }
    }, {

        timestamps: false,
        tableName: 'Authorization', // 设置表名
    });


    return authorizationModel;
};