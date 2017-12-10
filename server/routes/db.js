const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userId: {type: Number},
    id: { type: Number },
    title: { type: String, trim: true, minlength: 1 },
    body: { type: String, trim: true, minlength: 1 }
});

const Posts = mongoose.model('posts', PostSchema);

const url = 'mongodb://phongleo92:phongdeptrai@ds119306.mlab.com:19306/shoppingzero';

mongoose.connect(url, { useMongoClient: true });

module.exports = Posts;