const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
