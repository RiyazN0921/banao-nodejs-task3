const express = require('express');
// const liked = require('../controllers/likes.controller');
const likePost = require('../controllers/likes.controller');
const likeMiddleware = require("../middlewares/middlewares")

const likeRouter = express.Router();

likeRouter.post('/post/:crudId/like', likeMiddleware,likePost);

module.exports = likeRouter;