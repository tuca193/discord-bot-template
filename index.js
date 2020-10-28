const Client = require('./public-source/structures/client')
const Database = require('./public-source/structures/database')
const config = require('./public-source/structures/config')
const client = new Client({ws: {intents: config.intents}})
const database = new Database(config.firebaseConfig) 

client.init()
database.init()