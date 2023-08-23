const express = require('express');

const crudRouter = express.Router();
const crudController = require("../controllers/crud.controllers");
const postMiddleware = require("../middlewares/middlewares")

crudRouter.post('/post', postMiddleware, crudController.createPost);

crudRouter.get('/post', crudController.ViewAllPosts);

crudRouter.put('/post/:idPost', postMiddleware, crudController.updatePost);

crudRouter.delete('/post/:idPost', crudController.deletePost);

module.exports = crudRouter;