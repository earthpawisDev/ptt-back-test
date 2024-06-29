const mongoose = require('mongoose');
const { config } = require('../configs/server.config');
const db = (config.PRODUCT == 'true') ? config.MONGODB_API : config.MONGODB_API_DEV;

const connect = () => { 
    mongoose.set("strictQuery", false);
    mongoose.connect(db ,{
        useNewUrlParser: true,
        dbName: "ptt-test"
    })
        .then(() => console.log('Database connected success.'))
        .catch(err => console.log(err));
};

const database = {
    connect: connect
}

module.exports = database;