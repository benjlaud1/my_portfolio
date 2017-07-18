const express = require('express');
const router = express.Router();

const blogArray = [
    {
        date: 'July 14, 2017',
        title: 'Graduation Day',
        blog: 'At noon today, I accepted my certificate, token, and coveted black hoodie sweatshirt symbolizing the successful complete of Prime’s 20 week immersive Full Stack Software Engineering program. I, along with all my cohort-mates, are now certified Software Engineers! It was the most intense challenge I have ever faced and the reward could not have been greater. I was able to build some amazing relationships with everybody in my cohort and together we help get each other to the end. I don’t know what the future will bring, but I know will never forget my friends from Psilent Psi!'
    }
]

router.get('/', function (req, res) {
    console.log('in get blogs')
    res.status(200).send(blogArray)
}); // end GET blogs

module.exports = router;