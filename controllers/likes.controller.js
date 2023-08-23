const crud = require("../models/crud.model");
const Like = require("../models/like.model");

const likePost = async (req,res)=>{
    try {
        const crudId  = req.params.crudId;
        const likePost = await crud.findById(crudId);
        if(!likePost){
            res.json({
                message:"Post not found to like"
            })
        }
        
        const {userId} = req.body;

        const likeCOnfirmed = await Like.create({userId});
        likePost.like.push(likeCOnfirmed._id);

        await likePost.save();
            res.json({
                message:"liked post successfully"
            })
    } 
    catch (error) {
        res.json({
            message:"internal server error"
        })
    }
}


module.exports= likePost;