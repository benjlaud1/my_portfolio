const express = require('express');
const router = express.Router();

const blogArray = [
    {
        date: 'July 28th, 2017',
        title: 'Learn!',
        blog: 'I\'ve continued my journey to learn React and ES6. I find it amazing how React works and am just in awe as I build out my tutorial application. I look forward to each lesson and building my knowledge.'
    },
    {
        date: 'July 21, 2017',
        title: 'React!',
        blog: 'In my first week out of Prime I have taken on the challenge of learning ReactJS, a JavaScript library created by Facebook for building user interfaces. In libraries like JQuery or AngularJS, you build the HTML pages and link your code to the DOM by either selecting DOM elements by id or class, or using Angular’s binding. In React, however, you build sections of your HTML (known as Components) in JavaScript and use the server to render your HTML. Since these Components are stored in code, it becomes very easy to reuse a component over and over. Think about Facebook’s news feed, each post would be a Component. All posts will have a profile picture, a name of the person posting, a time, and their post’s contents.\n Check out Facebook’s React GitHub page for more info and tutorials.\n https://facebook.github.io/react/'
    },
    {
        date: 'July 14, 2017',
        title: 'Graduation Day',
        blog: 'At noon today, I accepted my certificate, token, and coveted black hoodie symbolizing the successful complete of Prime’s 20 week immersive Full Stack Software Engineering program. I, along with all my cohort-mates, are now certified Software Engineers! It was the most intense challenge I have ever faced and the reward could not have been greater. I was able to build some amazing relationships with everybody in my cohort and together we help get each other to the end. I don’t know what the future will bring, but I know will never forget my friends from Psilent Psi!'
    }
]

router.get('/', function (req, res) {
    console.log('in get blogs')
    res.status(200).send(blogArray)
}); // end GET blogs

module.exports = router;