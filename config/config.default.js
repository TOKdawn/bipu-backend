'use strict';

module.exports = appInfo => {
    const config = exports = {
        sequelize: {
            dialect: 'postgres',
            database: 'bipu',
            host: 'localhost',
            port: '5432',
            username: 'dawn',
            password: '',
        },
        security: {

            csrf: {
                enable: false,
            },

        },
        multipart: {
            whitelist: [
                '.png',
                '.jpg',
            ],
            fileSize: '3mb',
        },
        oss: {
            client: {
                accessKeyId: 'LTAIWoXg7pnODuaw',
                accessKeySecret: 'jZEI94u7dOLXQnhjgtyOygxSzUjBqJ',
                bucket: 'bipu',
                endpoint: 'oss-cn-beijing.aliyuncs.com',
                timeout: '10s',
            },
            useAgent: true,
        },
        passportGithub: {
            key: 'f6fce18e5524663f25f8',
            secret: 'ad54a7a8e09f61b78bce31996335ceb3d58e7bf0',
            callbackURL: 'http://127.0.0.1:7001/passport/github/callback',
            // proxy: false,
        },
        session: {
            key: 'EGG_SESS',
            maxAge: 24 * 3600 * 1000, // 1 天
            httpOnly: true,
            encrypt: true,
        }

    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1525504659189_9866';

    // add your config here
    config.middleware = [];

    return config;
};