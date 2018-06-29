// 谱子信息表
'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
    } = app.Sequelize;
    const ScoreModel = app.model.define('Score', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: STRING,
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

    return ScoreModel;
};