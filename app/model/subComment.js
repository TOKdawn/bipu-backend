//  评论表


'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        ARRAY,
        DATE
    } = app.Sequelize;

    const SubCommentModel = app.model.define('SubComment', {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_id: {
            type: INTEGER,
            allowNull: false,
        },
        targetid: {
            type: INTEGER,
            allowNull: true,
        },
        uid: {
            type: INTEGER,
            allowNull: false,
        },
        text: {
            type: STRING(300),
            allowNull: false,
            defaultValue: 'undefined',
        },
        status: { // -1已删除 0不可编辑 1可编辑 2回收站
            type: INTEGER,
            allowNull: false,
            defaultValue: 1,
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

        tableName: 'subComment', // 设置表名
    });

    return SubCommentModel;
};