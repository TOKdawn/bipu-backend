module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const VolumeSchema = new Schema({
        id: { type: Number },
        photo: { type: String },
        title: { type: String },
        describe: { type: String },
        status: { type: Number, default: 1 }, //-1已删除 0不可编辑 1可编辑 2回收站
        comment: { type: Array }
    });

    return mongoose.model('Volume', VolumeSchema);
}