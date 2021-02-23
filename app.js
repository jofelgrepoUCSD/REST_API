/*
This is how we used to do it
const http = require('http');
http.createServer();

Now lets welcome express
*/

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Everytime we hit a request we want this parser to run
app.use(bodyParser.json());
app.use(cors());



// Import Routes
const postsRoute = require('./routes/posts');
// Connect to a route using a middleware
app.use('/posts', postsRoute);

// Home Route
app.get('/', (req,res) => {
    res.send('This is the homepage')
});

// Connect to the data base and signal
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log("Connected to the database");
});
    


// How do we boot up the server?
app.listen(3000);