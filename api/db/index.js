const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    } catch (err) {
        throw err;
    };
};

module.exports = {
    connectToMongoose,
};
