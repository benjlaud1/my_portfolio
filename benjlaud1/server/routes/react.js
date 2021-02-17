const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/scoreboard', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/views/routes/react-scoreboard.html'));
}); 

module.exports = router;