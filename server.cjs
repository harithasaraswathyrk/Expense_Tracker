const express = require('express')
const bodyParser = require('body-parser')
// importing required functions
const {connectToDb, getDb} = require('./db.cjs')

const app = express()
app.use(bodyParser.json())

let db
// Connecting to the DB
connectToDb(function(error) {
    if(!error) {
        // Starting the server
        app.listen(8000)
        console.log('Listening on port 8000...')
        db = getDb()
    } else {
        // Server would not start
        console.log(error)
    }
})

app.post('/add-entry', function(request, response) {
    console.log(request.body)
})


app.use(express.static(__dirname))