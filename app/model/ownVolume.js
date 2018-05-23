//  用户创建谱册表
'use strict';

module.exports = app => {
    const {

        INTEGER,
    } = app.Sequelize;
    const ownVolumeModel = app.model.define('ownVolume', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        vid: {
            type: INTEGER,
            allowNull: false,

        },
        uid: {
            type: INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'ownVolume', // 设置表名

    });

    return ownVolumeModel;
};