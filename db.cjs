const {MongoClient} = require('mongodb')

let db
function connectToDb(startServer) {
    MongoClient.connect('mongodb://127.0.0.1:27017/ExpenseTracker').then(function(client) {
        db = client.db()
        return startServer()
    }).catch(function(error) {
        return startServer(error)
    })
}

function getDb() {
    return db
}

module.exports = {connectToDb, getDb}