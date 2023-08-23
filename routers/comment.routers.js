const express = require('express');
const commentRouter = express.Router();
const commentPost = require('../controllers/comments.controllers');
const commentMiddleware = require("../middlewares/middlewares")

commentRouter.post("/post/:crudId/comment",commentMiddleware, commentPost);

module.exports = commentRouter;