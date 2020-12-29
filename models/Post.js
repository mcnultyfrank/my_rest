const mongoose = require('mongoose');

const PostShema = mongoose.Schema({
    title: String,
    description: String
})

module.exports = mongoose.model('posts', PostShema)