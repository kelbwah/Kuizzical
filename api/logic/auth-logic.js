const bcrypt = require('bcrypt');
const db = require('../db');
const queries = require('../queries');

const logicToQueryCall = async (registerOrLogin, body) => {
    try {
        await db.connectToMongoose(); // Connect to mongoose 
    } catch (err) {
        return err; 
    };

    if (registerOrLogin === 'register') {
        try {
            const queryResult = await queries.auth.registerAuthQuery(body);

            return queryResult;
        } catch (err) {
            throw err;
        };
    } else {
        try {
            const queryResult = await queries.auth.loginAuthQuery(body);

            return queryResult;
        } catch (err) {
            throw err;
        };
    };
};

const registerLogic = async (body) => {
    try {
        const user = await logicToQueryCall('register', body);    

        return user;
    } catch (err) {
        throw err;
    };
};

const loginLogic = async (body) => { 
    try {
        const user = await logicToQueryCall('login', body);    

        return user;
    } catch (err) {
        throw err;
    };
};

module.exports = {
    registerLogic,
    loginLogic,
};
