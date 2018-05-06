 // 用户收藏谱册表

 'use strict';

 module.exports = app => {
     const {
         STRING,
         INTEGER
     } = app.Sequelize;
     const collectionVolumeModel = app.model.define('collectionVolume', {
         vid: {
             type: INTEGER(20),
             allowNull: false,
             primaryKey: true,
         },
         uid: {
             type: INTEGER(20),
             allowNull: false,

         }

     }, {
         timestamps: false
     });

     return collectionVolumeModel;
 };