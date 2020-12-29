// Imported express package
const express = require('express');
// Executed express package
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
app.use(bodyParser.json())

// importing routes

const postRoute = require('./routes/posts');

app.use('/posts', postRoute);
app.get('/', (req, res) => {
    res.send('welcome to home')
});

mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => {
        console.log('connected to db')
    });
    

app.listen(3000);




