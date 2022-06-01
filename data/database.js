const mongodb = require("mongodb");
const uri = require('./database-key');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(uri);
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw { message: "You must connect first!" };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
  mongodbURI: uri
};
