'use strict';


// 注意创建以及卸载顺序,先按照被依赖的再安装依赖别人的,先卸载依赖别人的,再卸载被依赖的
module.exports = {
    async up(queryInterface, Sequelize) {
        const {

            STRING,
            INTEGER,
            ARRAY,
            DATE,

        } = Sequelize;
        await queryInterface.createTable('User', {
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
                defaultValue: 1,
            },
            created_at: DATE,
            updated_at: DATE,
        });

        await queryInterface.createTable('Comment', {
            id: {
                type: INTEGER(20),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            volume_id: {
                type: INTEGER(20),
                allowNull: false,
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
            status: { // -1已删除 0不可编辑 1可编辑 2回收站
                type: INTEGER(5),
                allowNull: false,
                defaultValue: 1,
            },
            created_at: DATE,
            updated_at: DATE,
        });
        await queryInterface.createTable('Volume', {
            id: {
                type: INTEGER(20),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
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
            status: { // -1已删除 0不可编辑 1可编辑 2回收站
                type: INTEGER(5),
                allowNull: false,
                defaultValue: 1,
            },
            created_at: DATE,
            updated_at: DATE,
        });
        await queryInterface.createTable('ownVolume', {
            id: {
                type: INTEGER(20),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            vid: { // 数组外键,用于查评论表

                type: INTEGER({
                    references: {
                        model: 'Volume', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                }),

            },
            uid: { // 数组外键,用于查评论表
                type: INTEGER({

                    references: {
                        model: 'User', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                }),
            },
        });
        await queryInterface.createTable('collectionVolume', {
            id: {
                type: INTEGER(20),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            vid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'Volume', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                }),

            },
            uid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'User', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                }),
            },
            created_at: DATE,
            updated_at: DATE,
        });
        await queryInterface.createTable('scoreVolume', {
            id: {
                type: INTEGER(20),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            sid: {
                type: INTEGER(20),
                allowNull: false,
                primaryKey: true,
            },
            vid: { // 数组外键,用于查评论表
                type: INTEGER({

                    references: {
                        model: 'Volume', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: true,
                }),
            },
        });
        await queryInterface.createTable('subComment', {
            id: {
                type: INTEGER(20),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            comment_id: {
                type: INTEGER(20),
                allowNull: false,
            },
            targetid: {
                type: INTEGER(20),
                allowNull: true,
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
            status: { // -1已删除 0不可编辑 1可编辑 2回收站
                type: INTEGER(5),
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

        });
        await queryInterface.createTable('Authorization', {
            id: {
                type: INTEGER(20),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            provider: { //第三方
                type: STRING(20),
                allowNull: false,

            },
            token: {
                type: STRING(200),
                allowNull: false,
            },
            uid: { // 数组外键,用于查评论表
                type: INTEGER({
                    references: {
                        model: 'User', // 对应外键表
                        key: 'id', // 对应字段
                        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
                    },
                    allowNull: false,
                }),
            },

        }, {
            createAt: 'created_at',
            updateAt: 'updated_at',

        });
        /*
                  Add altering commands here.
                  Return a promise to correctly handle asynchronicity.

                  Example:
                  return queryInterface.createTable('users', { id: Sequelize.INTEGER });
                */
    },

    async down(queryInterface) {
        await queryInterface.dropTable('scoreVolume');
        await queryInterface.dropTable('collectionVolume');
        await queryInterface.dropTable('ownVolume');
        await queryInterface.dropTable('Volume');
        await queryInterface.dropTable('Comment');
        await queryInterface.dropTable('User');
        await queryInterface.dropTable('subComment');

        /*
                  Add reverting commands here.
                  Return a promise to correctly handle asynchronicity.

                  Example:
                  return queryInterface.dropTable('users');
                */
    },
};