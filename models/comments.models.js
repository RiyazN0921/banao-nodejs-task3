const mongoose = require('mongoose');

const {Schema} = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;