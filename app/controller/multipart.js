// app/controller/upload.js
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;

class UploadController extends Controller {
    async upload() {
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        const name = 'egg-multipart-test/' + path.basename(stream.filename);
        let result;
        try {
            // process file or upload to cloud storage
            result = await ctx.oss.put(name, stream);
        } catch (err) {
            // must consume the stream, otherwise browser will be stuck.
            await sendToWormhole(stream);
            throw err;
        }
        ctx.body = {
            url: result.url,
            // process form fields by `stream.fields`
            fields: stream.fields,
        };
    }
};

module.exports = UploadController;