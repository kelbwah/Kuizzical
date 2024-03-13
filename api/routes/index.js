const express = require('express');
const { verifyToken } = require('../middleware/verify-token');
const controllers = require('../controllers');
const authRouter = express.Router();
const gameRouter = express.Router();
const profileRouter = express.Router();
const quizRouter = express.Router();
const s3Router = express.Router();

/* Auth Routes */
authRouter.post('/register', controllers.auth.register);
authRouter.post('/login', controllers.auth.login);

/////////////////////////////////////////////////////////////

/* Quiz Routes */

/* https://localhost:6969/api/quiz?currPage=<currPage> GET */
quizRouter.get('', controllers.quiz.getAllQuizzes); 


/* https://localhost:6969/api/quiz/:quizId GET 
 *
 * quizID (req.params)
 *
 * */
quizRouter.get('/:quizId', controllers.quiz.getQuiz); 


/* https://localhost:6969/api/quiz?<userId> POST  
 *
 * userId (req.query)
 * quizObject (req.body)
 *
 * */
quizRouter.post('', verifyToken, controllers.quiz.createQuiz); // TODO: Add in middleware once finished.


/* https://localhost:6969/api/quiz/:quizId?userId=<userId> PATCH 
 *
 * quizId (req.params)
 * userId (req.query)
 * {key, new_value} (req.body)
 *
 * */
quizRouter.patch('/:quizId', verifyToken, controllers.quiz.updateQuiz); // TODO: Add in middleware once finished.


/* https://localhost:6969/api/quiz/:quizId?userId=<userId>  
 *
 * quizId (req.params)
 * userId (req.query)
 *
 * */
quizRouter.delete('/:quizId', verifyToken, controllers.quiz.deleteQuiz); // TODO: Add in middleware once finished. 

/////////////////////////////////////////////////////////////

/* S3 Upload Routes */
s3Router.post('', verifyToken, controllers.s3.s3Upload);
s3Router.delete('', verifyToken, controllers.s3.s3Delete);

/////////////////////////////////////////////////////////////

/* Profile Routes */
profileRouter.get('/:userId', controllers.profile.getUser);
profileRouter.patch('/:userId', verifyToken, controllers.profile.updateUser);
profileRouter.delete('/:userId', verifyToken, controllers.profile.deleteUser);

module.exports = {
    authRouter,
    gameRouter,
    profileRouter,
    quizRouter,
    s3Router,
};
