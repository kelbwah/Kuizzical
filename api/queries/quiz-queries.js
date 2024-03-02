const Quiz = require('../models/Quiz.js');

const createQuizQuery = async (body) => {
    const {
        author,
        title,
        description,
        termsAndDefinitions,
        visibility,
    } = body;

    try {
        const quiz = new Quiz({
            author: author,
            title: title,
            description: description,
            termsAndDefinitions: termsAndDefinitions,
            visibility: visibility,
        });
        const savedQuiz = await quiz.save();

        return savedQuiz;
    } catch (err) {
        if (err.code) {
            throw objectCreationErrorGenerator(err.code, (err.keyValue !== null || err.keyValue !== undefined ? err.keyValue : null));
        } else {
            throw err;
        };
    };

};

const deleteQuizQuery = async (quizAndUserId) => {
    const {
        quizId,
        userId,
    } = quizAndUserId;
    console.log(quizId);
    console.log(userId);

    try {
        const isUserAuthor = await Quiz.findOne({_id: quizId, author: userId});
        if (!isUserAuthor) throw new Error("Quiz ID doesn't exist or user is not author of quiz."); 

        const { deletedCount } = await Quiz.deleteOne({_id: quizId, author: userId});
        if (deletedCount < 1) throw new Error("Error while deleting quiz, double check quiz exists with correct author ID and quiz ID.");

        return 'Quiz deleted!'; 
    } catch (err) { 
        if (err.code) {
            throw objectCreationErrorGenerator(err.code, (err.keyValue !== null || err.keyValue !== undefined ? err.keyValue : null));
        } else {
            throw err;
        };
    };
};

const updateQuizQuery = async (body) => {
    const {
        quizId,
        userId,
        newKeysAndValues,
    } = body;

    try {
        const isUserAuthor = await Quiz.findOne({_id: quizId, author: userId});
        if (!isUserAuthor) throw new Error("Quiz ID doesn't exist or user is not author of quiz."); 
        
        const quiz = await Quiz.findByIdAndUpdate(quizId, newKeysAndValues, { runValidators: true });
        if (!quiz) throw new Error('Error trying to update quiz, double check request and try again later.');

        const savedQuiz = await quiz.save();

        return savedQuiz;
    } catch (err) {
        throw err; 
    };
};

const getAllQuizzesQuery = async (page) => {
    try {
        const allQuizzes = await Quiz.aggregate([
          { $skip: 12 * page },
          { $limit: 12 },
          {
            $lookup: {
              from: "users", 
              localField: "author",
              foreignField: "_id",
              as: "authorInfo",
            }
          },
          {
            $set: {
              author: {
                $arrayElemAt: ["$authorInfo.username", 0], 
              }
            }
          }]);

        return allQuizzes;
    } catch (err) {
        throw err; 
    };
};

const getQuizQuery = async (quizId) => {
    try {
        const quiz = await Quiz.findById(quizId);
        if (!quiz) throw new Error('Quiz not found');

        return quiz;
    } catch (err) {
        throw err; 
    };
};

module.exports = {
    createQuizQuery,
    deleteQuizQuery,
    updateQuizQuery,
    getAllQuizzesQuery,
    getQuizQuery,
};
