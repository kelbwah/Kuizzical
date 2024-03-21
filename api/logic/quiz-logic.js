const db = require('../db');
const queries = require('../queries');

const createQuizLogic = async (body) => {
    try {
        const queryResult = await queries.quiz.createQuizQuery(body);

        return queryResult;
    } catch (err) {
        throw err;
    };
};

const deleteQuizLogic = async (req) => { 
    try {
        const { userId } = req.query;
        const { quizId } = req.params;

        const queryResult = await queries.quiz.deleteQuizQuery({userId: userId, quizId: quizId});

        return queryResult;
    } catch (err) {
        throw err;
    };
};

const updateQuizLogic = async (req) => {
    try {
        const { quizId } = req.params;
        const { userId } = req.query;

        const queryBody = {
            quizId: quizId,
            userId: userId,
            newKeysAndValues: req.body,
        };

        const queryResult = await queries.quiz.updateQuizQuery(queryBody);

        return queryResult;
    } catch (err) {
        throw err;
    };
};

const getAllQuizzesLogic = async (page) => {
    try {
        const queryResult = await queries.quiz.getAllQuizzesQuery(page);

        return queryResult; 
    } catch (err) {
        throw err;
    };
};

const getQuizLogic = async (quizId) => {
    try {
        const queryResult = await queries.quiz.getQuizQuery(quizId);

        return queryResult; 
    } catch (err) {
        throw err;
    };
};

module.exports = {
    createQuizLogic,
    deleteQuizLogic,
    updateQuizLogic,
    getAllQuizzesLogic,
    getQuizLogic,
};
