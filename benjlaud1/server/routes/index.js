const path = require('path');
require('dotenv').config();
const http = require('http');
const request = require('es6-request');
const express = require('express');
const router = express.Router();

// get Github repos
router.get('/repos', function (req, res){
    res.status(200).send('bark');
    
}); // end GET repos

// http.get('http://api.github.com/users/' + process.env.GITHUB_USERNAME, function (response){
//     console.log('githubAPI:', response)
// })
// request.get('https://api.github.com/users/' + process.env.GITHUB_USERNAME, {
//     'Authorization': 'token '+ process.env.GITHUB_OAUTH_TOKEN}
// ).then(([body, res]) => {
//     console.log('GithubAPI Request:', body);
//     res.status(200).send('meow');
// });

// request.get("https://raw.githubusercontent.com/alexrsagen/node-es6-request/master/README.md")
// .then(([body, res]) => {
//     console.log(body);
//     // should output this README file! 
// });



// base route, serves index.html
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/views/index.html'));
}); // end GET index

module.exports = router;