const logic = require('../logic');
const db = require('../db');

const register = async (req, res) => {
    try {
        const logicResult = await logic.auth.registerLogic(req.body); 

        await db.disconnectFromMongoose();

        return res.status(201).json(logicResult);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

const login = async (req, res) => {
    try {
        const logicResult = await logic.auth.loginLogic(req.body); 

        await db.disconnectFromMongoose();

        return res.status(200).json(logicResult);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

module.exports = {
    register,
    login,
};
