//  用户创建谱册表
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER
    } = app.Sequelize;
    const ownVolumeModel = app.model.define('ownVolume', {
        id: {
            type: INTEGER(20),
            allowNull: false,
            primaryKey: true,
        },
        vid: {
            type: INTEGER(20),
            allowNull: false,

        },
        uid: {
            type: INTEGER(20),
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: 'ownVolume' // 设置表名

    });

    return ownVolumeModel;
};