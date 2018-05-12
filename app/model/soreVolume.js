// 谱册内谱曲表


'use strict';

module.exports = app => {
    const {

        INTEGER,
    } = app.Sequelize;
    const scoreVolumeModel = app.model.define('scoreVolume', {
        id: {
            type: INTEGER(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        vid: {
            type: INTEGER(20),
            allowNull: false,

        },
        sid: {
            type: INTEGER(20),
            allowNull: false,
        },

    }, {
        timestamps: false,
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });

    return scoreVolumeModel;
};