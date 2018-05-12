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

  };

    // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525504659189_9866';

  // add your config here
  config.middleware = [];

  return config;
};
