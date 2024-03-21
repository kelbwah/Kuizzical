const User = require('../models/User.js');

const getUserQuery = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User not found!');

        return user;
    } catch (err) {
        throw err;
    };
};

const updateUserQuery = () => {

};

const deleteUserQuery = () => {

};

module.exports = {
    getUserQuery,
    updateUserQuery,
    deleteUserQuery,
};
