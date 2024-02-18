const auth = require('./auth-logic.js');
const game = require('./game-logic.js');
const profile = require('./profile-logic.js');
const quiz = require('./quiz-logic.js');
const s3 = require('./s3-logic.js');

module.exports = {
    auth,
    game,
    profile,
    quiz,
    s3,
};
