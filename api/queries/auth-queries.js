const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const objectCreationErrorGenerator = require('../errors/query-errors.js');

const registerAuthQuery = async (body) => {
    const {
        firstName,
        lastName,
        email,
        username,
        password,
        age,
        academicStatus,
    } = body; 
    
    try {
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt); 
        const createdUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: passwordHash,
            age: age,
            academicStatus: academicStatus,
        });
        const savedUser = await createdUser.save();

        return savedUser;
    } catch (err) {
        if (err.code) {
            throw objectCreationErrorGenerator(err.code, (err.keyValue !== null || err.keyValue !== undefined ? err.keyValue : null));
        } else {
            throw err;
        };
    };
};

const loginAuthQuery = async (body) => {
    const {
        username,
        password,
    } = body;
    
    try {
        const foundUser = await User.findOne({ username: username });
        if (!foundUser) throw new Error('Username does not exist.'); 

        const isCorrectPassword = bcrypt.compareSync(password, foundUser.password);
        if (!isCorrectPassword) throw new Error('Username or password is incorrect.');
        
        jwt.sign({ userId: foundUser._id, username}, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { sameSite: 'none', secure: true }).json({
                user: foundUser,
                token: token,
            });
        });

        return foundUser;
    } catch (err) {
        if (err.code) {
            throw objectCreationErrorGenerator(err.code, (err.keyValue !== null || err.keyValue !== undefined ? err.keyValue : null));
        } else {
            throw err;
        };
    };
};

module.exports = {
    registerAuthQuery,
    loginAuthQuery,
};
