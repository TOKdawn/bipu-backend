'use strict';

module.exports = appInfo => {
    const config = exports = {
        sequelize: {
            dialect: 'postgres',
            database: 'bipu',
            host: 'localhost',
            port: '5432',
            username: 'dawn',
            password: ''
        }
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1525504659189_9866';

    // add your config here
    config.middleware = [];

    return config;
};