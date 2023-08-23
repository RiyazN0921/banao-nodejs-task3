const express = require('express')
const AdminController = require('../controllers/usercontrollers');
const AdminRouter = express.Router();

AdminRouter.post('/register', AdminController.register)
AdminRouter.post('/login', AdminController.login)
AdminRouter.post('/forgot-password', AdminController.forgotPassword);
module.exports = AdminRouter;