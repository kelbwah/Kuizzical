const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

// Initiate .env files
dotenv.config();

// Declaring const variables
const app = express();

// Setting up some CORS and JSON stuff for express
app.use(cors({
    credentials: true,
    origin: process.env.VITE_CLIENT_BASE_URL,
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Routes
app.use('/api/auth', routes.authRouter);
app.use('/api/quiz', routes.quizRouter);
app.use('/api/profile', routes.profileRouter);
app.use('/api/s3', routes.s3Router);
//app.use('/game', gameRoutes);

// Starting the server at given port
app.listen(process.env.API_PORT, () => console.log(`Server started at port ${process.env.API_PORT}`));
