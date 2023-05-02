const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.blogSchema = new mongoose.Schema({
    id: String,
    slug: String,
    title: String,
    content: String,
    category: String,
    authors: [Schema.Types.Mixed],
    starred: Boolean,
    updateTime: String,
    createdBy: String,
    timeToRead: Number,
    viewCount: Number
});
