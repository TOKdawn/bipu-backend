 module.exports = app => {
     const mongoose = app.mongoose;
     const Schema = mongoose.Schema;

     const collectionVolumeSchema = new Schema({
         uid: { type: Number },
         vid: { type: Number }
     });

     return mongoose.model('collectionVolume', collectionVolumeSchema);
 }