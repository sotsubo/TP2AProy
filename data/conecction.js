const MongoClient = require('mongodb').MongoClient;
const chalk = require('chalk');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB;

const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true});

async function getConnection(){
    return await client.connect().catch(err => console.log(chalk.red(err)));
}

module.exports = {getConnection};