const path = require('path');
require('dotenv').config();
const https = require('https');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    let options = {
        method: 'GET',
        host: 'api.github.com',
        path: '/users/' + process.env.GITHUB_USERNAME + '/repos',
        headers: {
            'Authorization': 'token '+ process.env.GITHUB_OAUTH_TOKEN,
            'User-Agent': process.env.GITHUB_USERNAME
        }
    }
    callback = function(response) {
        console.log('in callback')
        let str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            console.log(str.substr(0,35));
            res.status(200).send(str);
        });
    }
    const repoReq = https.request(options,callback);
    repoReq.end();
    repoReq.on('error', function(e) {
        console.error(e);
    });
}); // end GET code

module.exports = router;