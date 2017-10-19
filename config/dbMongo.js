'use strict';
const mongoose = require('mongoose');
const db = mongoose.connection;

// let connString = "mongodb://helio:igor&ozzy@test-shard-00-00-6t8fo.mongodb.net:27017,test-shard-00-01-6t8fo.mongodb.net:27017,test-shard-00-02-6t8fo.mongodb.net:27017/teste?ssl=true&replicaSet=test-shard-0&authSource=admin"
let connLocal = 'mongodb://localhost:27017/hasbeeralfa';

mongoose.connect(connLocal);

db.on('error', console.error);
db.once('open', () => {
    console.log('Conexão com banco de dados realizada com sucesso!')
})

module.exports = mongoose;