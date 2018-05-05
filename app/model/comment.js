 module.exports = app => {
     const mongoose = app.mongoose;
     const Schema = mongoose.Schema;

     const commentSchema = new Schema({
         time: { type: Number },
         text: { type: String },
         id: { type: Number },
         uid: { type: Number },
         subComment: { type: Array }
     });

     return mongoose.model('collectionVolume', commentSchema);
 }