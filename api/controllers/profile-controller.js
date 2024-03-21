const logic = require('../logic');
const db = require('../db');

const getUser = async (req, res) => {
    try{
        const { userId } = req.params;
        const logicResult = await logic.profile.getUserLogic(userId); 
        
        return res.status(200).json({ user: logicResult });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    };
};

const updateUser = async (req, res) => {

};

const deleteUser = async (req, res) => {

};

module.exports = {
    getUser,
    updateUser,
    deleteUser,
};
