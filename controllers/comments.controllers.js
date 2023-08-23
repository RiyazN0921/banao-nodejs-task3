const crud = require('../models/crud.model');
const comment = require('../models/comments.models');
const { response } = require('express');

const commentPost = async (req, res) => {
    try{
        const crudId = req.params.crudId;
        const commentOnPost = await crud.findById(crudId);
        if(!commentOnPost){
            res.json({
                message:"Comment cannot be proccessed"
            })
        }
        const {userId, content}= req.body;
        const confirmComment = await comment.create({userId, content});
        commentOnPost.comments.push(confirmComment._id);

        await commentOnPost.save();
        res.json({
            message:"commented on a post successfully"
        })
    }
    catch (error) {
        res.json({
            message:"internal server error"
        })
    }
}

module.exports = commentPost;