const logic = require('../logic');
const db = require('../db');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const register = async (req, res) => {
    try {
        const logicResult = await logic.auth.registerLogic(req.body); 

        await db.disconnectFromMongoose();

        jwt.sign({ userId: logicResult._id, username: logicResult.username}, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            return res.cookie('token', token, { sameSite: 'none', secure: true }).json({
                user: logicResult,
                token: token,
            });
        });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

const login = async (req, res) => {
    try {
        const logicResult = await logic.auth.loginLogic(req.body); 

        await db.disconnectFromMongoose();

        jwt.sign({ userId: logicResult._id, username: logicResult.username}, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            return res.cookie('token', token, { sameSite: 'none', secure: true }).json({
                user: logicResult,
                token: token,
            });
        }); 
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

module.exports = {
    register,
    login,
};
