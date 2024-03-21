const mongoose = require('mongoose');

const termAndDefinitionSchema = new mongoose.Schema({
    term: String,
    definition: String,
    termImageInfo: {
        type: String,
        default: '',
    },
    definitionImageInfo: {
        type: String,
        default: '',
    },
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
            minLength: 1,
            maxLength: 75, 
            required: true,
        },
        description: {
            type: String,
            minLength: 1,
            maxLength: 350, 
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
