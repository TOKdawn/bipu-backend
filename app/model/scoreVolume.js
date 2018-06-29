// 谱册内谱曲表


'use strict';

module.exports = app => {
    const {

        INTEGER,
    } = app.Sequelize;
    const scoreVolumeModel = app.model.define('scoreVolume', {
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
        sid: {
            type: INTEGER,
            allowNull: false,
        },

    }, {
        timestamps: false,
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });

    return scoreVolumeModel;
};