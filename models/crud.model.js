const mongoose = require('mongoose');

const {Schema} = require('mongoose');

const crudSchema = new mongoose.Schema({
   userId:{
    type:String,
    required:true
   },
   content:{
    type:String,
    required:true
   },
   like:[{
    type:mongoose.Types.ObjectId, 
    ref:"like"
   }],
   comments:[{
    type:mongoose.Types.ObjectId,
    ref:"comment"
   }]
})

const CRUD = mongoose.model("CRUD",crudSchema);
module.exports = CRUD;


