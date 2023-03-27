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

router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard');
})

router.get('/view-post/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id,{
        include: {
            model: Comment,
          },
        });
    console.log(post);
    res.render('view-post', { post });
})


module.exports = router;
