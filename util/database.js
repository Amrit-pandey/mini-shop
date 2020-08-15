const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
   MongoClient.connect('mongodb+srv://Amrit:amrit234@cluster0.dcvun.mongodb.net/shop' )
    .then(client => {
    console.log('connected');
    callback(client)
    })
    .catch(err => console.log(err))
}

module.exports = mongoConnect;