
const { bgMagenta, bgCyan } = require('colors')
const firebase = require('firebase')

module.exports = class Database {
    constructor(firebaseConfig) {
    this.databaseConfig = firebaseConfig
}
async init() {
firebase.initializeApp(this.databaseConfig).then(() => {
    console.log(`[ ${bgMagenta(`DATABASE`)} ] - ${bgCyan(`CONNECTED WITH SUCESS`)}`)
})

}
}



