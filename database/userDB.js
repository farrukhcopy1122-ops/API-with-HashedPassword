const mongoose = require('mongoose');
const MONGOURI = process.env.MONGOURI;


const mongoDB = async () => {
    try {
        await mongoose.connect(MONGOURI);
        console.log('MongoDB Connected...')
    } catch (error) {
        console.log(`Error occured ${error}...`);
    }
}

module.exports = mongoDB

