 // 谱册内谱曲表


 'use strict';

 module.exports = app => {
     const {
         STRING,
         INTEGER
     } = app.Sequelize;
     const scoreVolumeModel = app.model.define('scoreVolume', {
         vid: {
             type: INTEGER(20),
             allowNull: false,

         },
         sid: {
             type: INTEGER(20),
             allowNull: false,
             primaryKey: true,
         }

     }, {
         timestamps: false
     });

     return scoreVolumeModel;
 };