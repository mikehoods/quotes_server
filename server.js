const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const LOGIN = process.env.LOGIN
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 4000
const quotesController = require('./controllers/quotes.js')

app.use(cors());

mongoose.connect(`mongodb+srv://${LOGIN}@cluster0.q3hzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
{})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error: ", err.message));

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/quotes/', quotesController)

app.listen(PORT, () => {
    console.log(`You are now listening on Port: ${PORT}`)
})