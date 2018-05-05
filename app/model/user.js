   // {app_root}/app/model/user.js
   module.exports = app => {
       const mongoose = app.mongoose;
       const Schema = mongoose.Schema;

       const UserSchema = new Schema({
           id: { type: Number },
           avatar: { type: String },
           name: { type: String },
           role: { type: Number },
           createTime: { type: Number },
           updateTime: { type: Number }
       });

       return mongoose.model('User', UserSchema);
   }