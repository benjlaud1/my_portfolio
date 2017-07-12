// requires
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// route includes
const profile = require('./routes/profile');
const code = require('./routes/code');
const index = require('./routes/index');

// define port
const port = process.env.PORT || 3001;

// middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use('/profile', profile);
app.use('/code', code);

// route to index.js
app.use('/*', index);

// spin up server
app.listen(port, function(){
    console.log('server listening on port:', port);
}); // end listen
