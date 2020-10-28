
const { cyan, magenta } = require('colors')
const firebase = require('firebase')

module.exports = class Database {
    constructor(firebaseConfig) {
    this.databaseConfig = firebaseConfig
}
async init() {
firebase.initializeApp(this.databaseConfig)
console.log(`[ ${magenta(`DATABASE`)} ] - ${cyan(`CONNECTED WITH SUCESS`)}`)


}
}



