const express = require('express');
const router = express.Router();

const blogArray = [
    {
        date: 'July 21, 2017',
        title: 'React!',
        blog: 'In my first week out of Prime I have taken on the challenge of learning ReactJS, a JavaScript library created by Facebook for building user interfaces. In libraries like JQuery or AngularJS, you build the HTML pages and link your code to the DOM by either selecting DOM elements by id or class, or using Angular’s binding. In React, however, you build sections of your HTML (known as Components) in JavaScript and use the server to render your HTML. Since these Components are stored in code, it becomes very easy to reuse a component over and over. Think about Facebook’s news feed, each post would be a Component. All posts will have a profile picture, a name of the person posting, a time, and their post’s contents.</br>Check out Facebook’s <a href=”https://facebook.github.io/react/”>React GitHub page</a> for more info and tutorials.'
    },
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