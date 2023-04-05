const router = require('express').Router();
const withAuth = require('../utils/auth');

const { User, Post, Comment } = require('../models');

// Home page - display all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Convert posts to plain data
    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    console.log('Home Page');
    console.log('All posts');
    console.log(posts);

    res.render('home', {
      loggedIn: req.session.loggedIn,
      posts
    });
  } catch (err) {
    console.log(err);
  }
});

// Login page - show login form
router.get('/login', (req, res) => {
  console.log('Login Page');

  if (req.session.loggedIn) {
    res.redirect('/');
  }

  res.render('login');
});

// Dashboard page - show all posts by user
router.get('/dashboard', withAuth, (req, res) => {
  // TODO: Add dashboard functionality
  res.render('dashboard', {
    loggedIn: req.session.loggedIn,
  });
})

// View post page - show single post and comments
router.get('/view-post/:id', async (req, res) => {
  const postData = await Post.findByPk(req.params.id, {
    include: [
      {
        model: User,
        attributes: ['username'],
      },
      {
      model: Comment
      },
    ]
  });

  // Convert post to plain data
  const post = postData.get({ plain: true });

  console.log('View Post Page');
  console.log('Post');
  console.log(post);

  res.render('view-post', { post });
})

module.exports = router;