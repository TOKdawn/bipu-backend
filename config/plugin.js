'use strict';
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};
exports.oss = {
    enable: true,
    package: 'egg-oss',
};
module.exports.passport = {
    enable: true,
    package: 'egg-passport',
};

module.exports.passportGithub = {
    enable: true,
    package: 'egg-passport-github',
};

// module.exports.passportWeibo = {
//     enable: true,
//     package: 'egg-passport-weibo',
// };

// had enabled by egg
// exports.static = true;