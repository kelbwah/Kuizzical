const logic = require('../logic');

const register = async (req, res) => {
    try {
        const logicResult = await logic.auth.registerLogic(req.body); 
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

const login = async (req, res) => {
    try {
        const logicResult = await logic.auth.loginLogic(req.body); 
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};
const test = async (req, res) => {
    try{
        console.log(`Here's the test body: ${req.body}`);
        return res.status(200).json({ result: "success!" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
;}

module.exports = {
    register,
    login,
    test,
};

