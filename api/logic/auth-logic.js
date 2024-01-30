const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const logic = require('../logic');

const registerLogic = async (body) => {
    /*
    const {
        firstName,
        lastName,
        email,
        username,
        password,
        age,
        academicStatus,
    } = body;  
    */
    console.log(`\n\nMade call to register logic with body: ${body}\n\n`)

};

const loginLogic = async (body) => { 
    /*
    const {
        email,
        username,
        password,
    } = body;  
    */
    console.log(`\n\nMade call to login logic with body: ${body}\n\n`)
};

module.exports = {
    registerLogic,
    loginLogic,
};
