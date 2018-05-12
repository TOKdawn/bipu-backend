'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/collection/', controller.user.getMyCollection);
  router.get('/user/:uid', controller.user.getInfo);

  router.get('/user/collection/:uid', controller.user.getUserCollection);
  router.post('/user/collection', controller.user.addCollectionVolume);
  router.delete('/user/collection/:vid', controller.user.deleteCollectionVolume);


  router.get('/volume', controller.volume.getVolumeList);

  router.post('/volume', controller.volume.createVolume); // 文件上传

  router.delete('/volume/:vid', controller.volume.deleteVolume);

  router.put('/volume/:vid', controller.volume.editVolume); // 文件上传

  router.get('/volume/:vid', controller.volume.getVolumeInfo);

  router.get('/volume/:vid/score', controller.volume.getVolumeScore);


  router.post('/volume/:vid/score', controller.volume.addVolumeScore);

  router.delete('/volume/:vid/score/:sid', controller.volume.deleteVolumeScore);
  router.post('/upload', controller.multipart.upload);

  router.get('/volume/:vid/comment', controller.volume.getComment);

  router.post('/volume/:vid/comment', controller.volume.addComment);
  router.delete('/volume/comment/:cid', controller.volume.delectComment);
};
