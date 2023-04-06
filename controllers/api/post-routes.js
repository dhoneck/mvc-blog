const router = require('express').Router();
const { Post, Comment } = require('../../models');

// Create single post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      'title': req.body.title,
      'content': req.body.content,
      'user_id': req.session.userId
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all posts
router.get('/', async (req, res) => {
  console.log('GET all posts');
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get single post
router.get('/:id', async (req, res) => {
  console.log('GET single post');
  try {
    const post = await Post.findByPk();
    if (!post) {
      res.status(404).json({ message: 'No post found with that id!' });
      return
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err)
  }
});

// Update single post
router.put('/:id', async (req, res) => {
  console.log('PUT single post');
  console.log(req.body);
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete single post
router.delete('/:id', async (req, res) => {
  console.log('DELETE single post');
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedPost) {
      res.status(404).json({ message: 'No post found with that id!' });
      return
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;