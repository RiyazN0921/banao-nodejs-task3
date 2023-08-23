const mongoose = require('mongoose');

const {Schema} = require('mongoose');

const likeSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    }
})

const like = mongoose.model('like', likeSchema);
module.exports = like;