const auth = require('./auth-queries.js');
const game = require('./game-queries.js');
const profile = require('./profile-queries.js');
const quiz = require('./quiz-queries.js');
const s3 = require('./s3-queries.js');

module.exports = {
    auth,
    game,
    profile,
    quiz,
    s3,
};
