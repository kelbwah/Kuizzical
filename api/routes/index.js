const express = require('express');
const { verifyToken } = require('../middleware/index.js');
const controllers = require('../controllers');
const authRouter = express.Router();

authRouter.post('/register', controllers.auth.register);
authRouter.post('/login', controllers.auth.login);
authRouter.post('/test', controllers.auth.test);

module.exports = {
    authRouter,
};
