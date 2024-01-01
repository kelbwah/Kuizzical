const express = require('express');
const dotenv = require('dotenv');
const multer = require('multer');
const aws = require('aws');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');

dotenv.config();

const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
/*
const jwtSecret = process.env.JWT_SECRET;
const S3AccessKey = process.env.S3_ACCESS_KEY;
const S3SecretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: S3AccessKey,
        secretAccessKey: S3SecretAccessKey,
    },
});
*/


app.use(cors({
    credentials: true,
    origin: process.env.HOST_URL,
}));
app.use(express.json());
app.use(cookieParser());


/*
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: S3BucketName,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            const fileName = Date.now().toString() + '-' + file.originalname;
            profilePath=`https://${S3BucketName}.s3.amazonaws.com/${fileName}`;
            cb(null, fileName);
        }
    })
});
*/

app.listen(
    process.env.PORT || 3001, 
    () => console.log(`Server Port: ${process.env.PORT}`)
);
