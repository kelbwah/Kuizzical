const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (err) {
        throw err;
    };
};

module.exports = {
    connectToMongoose,
};
