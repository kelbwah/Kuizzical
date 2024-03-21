const auth = require('./auth-controller.js');
const game = require('./game-controller.js');
const profile = require('./profile-controller.js');
const quiz = require('./quiz-controller.js');
const s3 = require('./s3-controller.js');

module.exports = {
    auth,
    game,
    profile,
    quiz,
    s3,
};
