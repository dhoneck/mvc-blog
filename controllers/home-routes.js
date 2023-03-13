const router = require('express').Router();
const withAuth = require('../utils/auth');

const { User, Post } = require('../models');


router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
              {
                model: User,
                attributes: ['username'],
              },
            ],
            });
        console.log('HOME');
        console.log(posts);
        res.render('home', {
            loggedIn: req.session.loggedIn,
            posts
        });
        
    } catch (err) {
        
    }
});

router.get('/login', (req, res) => {
    console.log('LOGIN');
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
