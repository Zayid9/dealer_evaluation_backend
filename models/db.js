const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db('GiftLinkDB');
}

module.exports = connectToDatabase;