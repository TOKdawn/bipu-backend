//  评论表


'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        ARRAY
    } = app.Sequelize;

    const CommentModel = app.model.define('Comment', {
        id: {
            type: INTEGER(20),
            allowNull: false,
            primaryKey: true,
        },
        uid: {
            type: INTEGER(20),
            allowNull: false,
        },
        text: {
            type: STRING(300),
            allowNull: false,
            defaultValue: 'undefined',
        },
        subComment: {
            type: ARRAY(INTEGER),
            allowNull: true,
            defaultValue: 'null',
        }
    }, {
        timestamps: false
    });

    return CommentModel;
};