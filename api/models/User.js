const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        academicStatus: {
            type: String,
            enum: ['Elementary', 'Middle School', 'High School', 'Undergraduate', 'Graduate', 'Other'],
            required: true,
        }, 
    },
    { timestamps: true },
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
