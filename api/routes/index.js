const express = require('express');
const { verifyToken } = require('../middleware/verify-token');
const controllers = require('../controllers');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const authRouter = express.Router();
const gameRouter = express.Router();
const profileRouter = express.Router();
const quizRouter = express.Router();
const s3Router = express.Router();
const dotenv = require('dotenv');

/* .env setup */
dotenv.config();

/////////////////////////////////////////////////////////////

/* For s3 image uploads */
let imagePath = null; 
const S3AccessKey = process.env.S3_ACCESS_KEY;
const S3SecretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
const S3BucketName = process.env.S3_BUCKET_NAME;
const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: S3AccessKey,
        secretAccessKey: S3SecretAccessKey,
    },
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: S3BucketName,
        acl: 'public-read',
        metadata: function (_, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (_, file, cb) {
            const fileName = Date.now().toString() + '-' + file.originalname;
            imagePath=`https://${S3BucketName}.s3.amazonaws.com/${fileName}`;
            cb(null, fileName);
        },
    }),
});

const appendS3URLMiddleware = (req, res, next) => {
    if (imagePath !== null) {
        req.body.imageUrl = imagePath;
    };

    next();
};

/////////////////////////////////////////////////////////////

/* Auth Routes */
authRouter.post('/register', controllers.auth.register);
authRouter.post('/login', controllers.auth.login);

/////////////////////////////////////////////////////////////

/* Quiz Routes */

/* https://localhost:6969/api/quiz?page=<currPage> GET */
quizRouter.get('', controllers.quiz.getAllQuizzes); 


/* https://localhost:6969/api/quiz/:quizId GET 
 *
 * quizID (req.params)
 *
 * */
quizRouter.get('/:quizId', controllers.quiz.getQuiz); 


/* https://localhost:6969/api/quiz?userId=<userId> POST  
 *
 * userId (req.query)
 * quizObject (req.body)
 *
 * */
quizRouter.post('', controllers.quiz.createQuiz); // TODO: Add in middleware once finished.


/* https://localhost:6969/api/quiz/:quizId?userId=<userId> PATCH 
 *
 * quizId (req.params)
 * userId (req.query)
 * {key, new_value} (req.body)
 *
 * */
quizRouter.patch('/:quizId', controllers.quiz.updateQuiz); // TODO: Add in middleware once finished.


/* https://localhost:6969/api/quiz/:quizId?userId=<userId>  
 *
 * quizId (req.params)
 * userId (req.query)
 *
 * */
quizRouter.delete('/:quizId', controllers.quiz.deleteQuiz); // TODO: Add in middleware once finished. 

/////////////////////////////////////////////////////////////

/* S3 Upload Routes */
s3Router.post('/upload/image', upload.array('image', 1), appendS3URLMiddleware, controllers.s3.s3Upload);
s3Router.delete('/delete/image', controllers.s3.s3Delete);

/////////////////////////////////////////////////////////////

/* Profile Routes */
profileRouter.get('/:userId', controllers.profile.getUser);
profileRouter.patch('/:userId', controllers.profile.updateUser);
profileRouter.delete('/:userId', controllers.profile.deleteUser);

module.exports = {
    authRouter,
    gameRouter,
    profileRouter,
    quizRouter,
    s3Router,
};
