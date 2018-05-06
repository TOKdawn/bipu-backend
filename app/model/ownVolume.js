//  用户创建谱册表
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER
    } = app.Sequelize;
    const ownVolumeModel = app.model.define('ownVolume', {
        vid: {
            type: INTEGER(20),
            allowNull: false,
            primaryKey: true,
        },
        uid: {
            type: INTEGER(20),
            allowNull: false,

        }

    }, {
        timestamps: false
    });

    return ownVolumeModel;
};