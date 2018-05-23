// 用户收藏谱册表

'use strict';

module.exports = app => {
    const {
        INTEGER,
    } = app.Sequelize;
    const collectionVolumeModel = app.model.define('collectionVolume', {
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
        tableName: 'collectionVolume', // 设置表名
    });


    return collectionVolumeModel;
};