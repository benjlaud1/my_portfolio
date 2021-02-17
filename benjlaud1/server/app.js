// requires
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// route includes
const profile = require('./routes/profile');
const code = require('./routes/code');
const index = require('./routes/index');
const blog = require('./routes/blog');
const react = require('./routes/react');

// define port
const port = process.env.PORT || 3001;

// middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use('/profile', profile);
app.use('/code', code);
app.use('/blog', blog);
app.use('/react', react);

// route to index.js
app.use('/*', index);

// spin up server
app.listen(port, function(){
    console.log('server listening on port:', port);
}); // end listen
