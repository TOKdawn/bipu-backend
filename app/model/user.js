// {app_root}/app/model/user.js
//    用户表


'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
    } = app.Sequelize;
    const UserModel = app.model.define('User', {
        id: {
            type: INTEGER(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        avatar: {
            type: STRING(200),
            allowNull: true,
        },
        name: {
            type: STRING(10),
            allowNull: false,
            defaultValue: 'undefined',
        },
        signature: {
            type: STRING(100),
            allowNull: true,
            defaultValue: 'undefined',
        },
        role: { //
            type: INTEGER(5),
            allowNull: false,
            defaultValue: 1, //1登录 ,0未登录,2管理员
        },
        created_at: {
            type: DATE,
            allowNull: true,
        },
        updated_at: {
            type: DATE,
            allowNull: true,
        },

    }, {
        createAt: 'created_at',
        updateAt: 'updated_at',
        timestamps: true,
        freezeTableName: true, // 默认表名会被加s,此选项强制表名跟model一致
    });

    return UserModel;
};