const crud = require("../models/crud.model");

const createPost = async (req,res)=>{
    try{
        const {userId, content} = req.body;
        const createpost = await crud.create({userId,content});
        res.json({
            message:"post created successfully",
            createpost
        })
    }
    catch(err){
        res.json({
            message:"error in creating post"
        })
    }
}

const ViewAllPosts = async (req, res) => {
    try{
        const response = await crud.find();
        res.json({
            message:response
        })
    }
    catch(err){
        res.json({
            message:"error to view all posts"
        })
    }
}

const updatePost = async (req, res) => {
    try{
        const crudId = req.params.crudId;
        const {content} = req.body;
        const updatepost = await crud.findByIdAndUpdate(crudId, {content},{new: true});
        if(!updatepost){
            res.json({
                message:"Post not found"
            })
        }
        else{
            res.json({
                message:"Post updated successfully"
            })
        }
    }
    catch(err){
        res.json({
            message:"internal server error"
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const crudId = req.params.crudId;
        const deletepost = await crud.findByIdAndDelete(crudId);
        if(!deletepost){
            res.json({
                message: "post not found"
            })
        }
        else{
            res.json({
                message: "post has been deleted successfully"
            })
        }
    } 
    catch (error) {
        res.json({
            message:"internal server error"
        })
    }
}

module.exports = {
    createPost,
    ViewAllPosts,
    updatePost,
    deletePost
}