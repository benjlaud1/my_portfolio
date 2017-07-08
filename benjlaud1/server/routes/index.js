const path = require('path');
const express = require('express');
const router = express.Router();

// get Github repos
router.get('/repos', function (req, res){
    res.status(200).send('bark');
}); // end GET repos

// base route, serves index.html
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/views/index.html'));
}); // end GET index

module.exports = router;