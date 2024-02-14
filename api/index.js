const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const routes = require('./routes/index.js');

// Initiate .env files
dotenv.config();

// Declaring const variables
const app = express();

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

// Uploading to aws (MIGHT PUT THIS IN QUIZ-LOGIC)
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: S3BucketName,
        acl: 'public-read',
        metadata: function (_, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (_, file, cb) {
            const fileName = Date.now().toString() + '-' + file.originalname;
            profilePath=`https://${S3BucketName}.s3.amazonaws.com/${fileName}`;
            cb(null, fileName);
        },
    }),
});

// Setting up some CORS and JSON stuff for express
app.use(cors({
    credentials: true,
    origin: process.env.VITE_CLIENT_BASE_URL,
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.use('/api/auth', routes.authRouter);
//app.use('/quiz', quizRoutes);
//app.use('/game', gameRoutes);
//app.use('/profile', profileRoutes);

// Starting the server at given port
app.listen(process.env.API_PORT, () => console.log(`Server started at port ${process.env.API_PORT}`));
