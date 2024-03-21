const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('../routes/index.js');
const db = require('../db/index.js');

// Initiate .env files
dotenv.config();

// Declaring const variables
const app = express();

// Setting up some CORS and JSON stuff for express
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true,
}));
db.connectToMongoose();

// Routes
app.use('/api/auth', routes.authRouter);
app.use('/api/quiz', routes.quizRouter);
app.use('/api/profile', routes.profileRouter);
app.use('/api/s3', routes.s3Router);
//app.use('/game', gameRoutes);

module.exports = app;
