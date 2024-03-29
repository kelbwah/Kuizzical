const logic = require('../logic');
const db = require('../db');
const dotenv = require('dotenv');

dotenv.config();

const createQuiz = async (req, res) => {
    try {
        const logicResult = await logic.quiz.createQuizLogic(req.body); 

        return res.status(201).json({ quiz: logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

const deleteQuiz = async (req, res) => {
    try {
        const logicResult = await logic.quiz.deleteQuizLogic(req); 

        return res.status(200).json({ result: logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};


const updateQuiz = async (req, res) => {
    try {
        const logicResult = await logic.quiz.updateQuizLogic(req); 

        return res.status(200).json({ quiz: logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

const getAllQuizzes = async (req, res) => {
    try {
        const { page } = req.query;
        const logicResult = await logic.quiz.getAllQuizzesLogic(page); 

        return res.status(200).json({ quiz: logicResult });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    };
};

const getQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const logicResult = await logic.quiz.getQuizLogic(quizId); 

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
