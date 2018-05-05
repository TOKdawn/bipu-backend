 module.exports = app => {
     const mongoose = app.mongoose;
     const Schema = mongoose.Schema;

     const ownVolumeSchema = new Schema({
         uid: { type: Number },
         vid: { type: Number }
     });

     return mongoose.model('ownVolume', ownVolumeSchema);
 }