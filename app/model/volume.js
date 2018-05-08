// 谱册表

'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        ARRAY,
        DATE
    } = app.Sequelize;

    const VolumeModel = app.model.define('Volume', {
        id: {
            type: INTEGER(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        photo: {
            type: STRING(200),
            allowNull: true,
        },
        title: {
            type: STRING(50),
            allowNull: false,
            defaultValue: 'undefined',
        },
        describe: {
            type: STRING(300),
            allowNull: true,
            defaultValue: 'undefined',
        },
        status: { //-1已删除 0不可编辑 1可编辑 2回收站
            type: INTEGER(5),
            allowNull: false,
            defaultValue: 1,
        },
        comment: {
            type: ARRAY(INTEGER),
            allowNull: true,
            defaultValue: null,
        },
        createAt: {
            type: DATE,
            allowNull: true,
        },
        updateAt: {
            type: DATE,
            allowNull: true,
        }
    }, {
        createAt: 'createAt',
        updateAt: 'updateAt',
        timestamps: false, //时间戳
        tableName: 'Volume' // 设置表名
    });

    return VolumeModel;
};