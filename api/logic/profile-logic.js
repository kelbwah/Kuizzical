const db = require('../db');
const queries = require('../queries');

const getUserLogic = async (userId) => {
    try {
        await db.connectToMongoose();
        const queryResult = await queries.profile.getUserQuery(userId);

        return queryResult;
    } catch (err) {
        throw err;
    };
};

const updateUserLogic = async () => {

};

const deleteUserLogic = async () => {

};

module.exports = {
    getUserLogic,
    updateUserLogic,
    deleteUserLogic,
};
