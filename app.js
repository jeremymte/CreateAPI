const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')


//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Middlewares
// app.use('/posts', () => {
//     console.log('This is a middleware running');
// });

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});





//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to DB!')
);

//How do we start listening to the server
app.listen(3001);