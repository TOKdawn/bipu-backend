'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;

    router.get('/', controller.home.index);
    router.get('/user/collection/', controller.user.getMyCollection); //用户权限
    router.get('/user/:uid', controller.user.getInfo);
    router.get('/user/collection/:uid', controller.user.getUserCollection); //用户权限
    router.post('/user/collection', controller.user.addCollectionVolume); //拥有者权限
    router.delete('/user/collection/:vid', controller.user.deleteCollectionVolume); //拥有者权限
    router.get('/volume', controller.volume.getVolumeList);
    router.post('/volume', controller.volume.createVolume); // 用户
    router.delete('/volume/:vid', controller.volume.deleteVolume); //拥有者权限
    router.put('/volume/:vid', controller.volume.editVolume); // 拥有者权限
    router.get('/volume/:vid', controller.volume.getVolumeInfo);
    router.get('/volume/:vid/score', controller.volume.getVolumeScore);
    router.post('/volume/:vid/score', controller.volume.addVolumeScore); //拥有者
    router.delete('/volume/:vid/score/:sid', controller.volume.deleteVolumeScore); //拥有者
    router.post('/upload', controller.multipart.upload); //拥有者
    router.get('/volume/:vid/comment', controller.volume.getComment);
    router.post('/volume/:vid/comment', controller.volume.addComment); //用户
    router.delete('/comment/:cid', controller.volume.delectComment); //拥有者
    router.delete('/subcomment/:cid', controller.volume.delectSubcomment); //拥有者 
    app.passport.mount('github');
    // 上面的 mount 是语法糖，等价于
    // const github = app.passport.authenticate('github', {});
    // router.get('/passport/github', github);
    // router.get('/passport/github/callback', github);
};