 module.exports = app => {
     const mongoose = app.mongoose;
     const Schema = mongoose.Schema;

     const scoreVolumeSchema = new Schema({
         sid: { type: Number },
         vid: { type: Number }
     });

     return mongoose.model('scoreVolume', scoreVolumeSchema);
 }