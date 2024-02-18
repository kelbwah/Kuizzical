const logic = require('../logic');
const db = require('../db');
const dotenv = require('dotenv');

dotenv.config();

// DONE
const createQuiz = async (req, res) => {
    try {
        const logicResult = await logic.quiz.createQuizLogic(req.body); 

        await db.disconnectFromMongoose();

        return res.status(201).json({ quiz: logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

// DONE
const deleteQuiz = async (req, res) => {
    try {
        const logicResult = await logic.quiz.deleteQuizLogic(req); 

        await db.disconnectFromMongoose();

        return res.status(200).json({ result: logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};


const updateQuiz = async (req, res) => {
    try {
        const logicResult = await logic.quiz.updateQuizLogic(req); 

        await db.disconnectFromMongoose();

        return res.status(200).json({ quiz: logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

// DONE
const getAllQuizzes = async (req, res) => {
    try {
        const logicResult = await logic.quiz.getAllQuizzesLogic(); 

        await db.disconnectFromMongoose();

        return res.status(200).json({ quiz: logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

// DONE
const getQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const logicResult = await logic.quiz.getQuizLogic(quizId); 

        await db.disconnectFromMongoose();

        return res.status(200).json({ quiz: logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};



module.exports = {
    createQuiz,
    deleteQuiz,
    updateQuiz,
    getAllQuizzes,
    getQuiz,
};
