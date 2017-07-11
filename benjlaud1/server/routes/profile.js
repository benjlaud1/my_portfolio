const path = require('path');
require('dotenv').config();
const https = require('https');
const express = require('express');
const router = express.Router();

// get Github profile
router.get('/', function (req, res){
    console.log('in profile route');
    var options = {
        method: 'GET',
        host: 'api.github.com',
        path: '/users/' + process.env.GITHUB_USERNAME,
        headers: {
            'Authorization': 'token '+ process.env.GITHUB_OAUTH_TOKEN,
            'User-Agent': process.env.GITHUB_USERNAME
        }
    }
    callback = function(response) {
        console.log('in callback')
        var str = '';

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
    const profileReq = https.request(options,callback);
    profileReq.end();
    profileReq.on('error', function(e) {
        console.error(e);
    });

}); // end GET profile

module.exports = router;
