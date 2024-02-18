const mongoose = require('mongoose');

const termAndDefinitionSchema = new mongoose.Schema({
    term: String,
    definition: String,
    isTermImage: Boolean,
    isDefinitionImage: Boolean,
}, { _id: false });

const QuizSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
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
        termsAndDefinitions: [termAndDefinitionSchema],
        visibility: {
            type: String,
            enum: ['Private', 'Public', 'Invite-Only'],
            requried: true,
        },
    },
    { timestamps: true },
);

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
