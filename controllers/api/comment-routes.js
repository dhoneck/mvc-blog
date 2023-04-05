const router = require('express').Router();
const { Post, Comment } = require('../../models');

// Create single comment
router.post('/', async (req, res) => {
  console.log('POST new comment');
  console.log(req.body);

  console.log(`comment: ${req.body.comment}`);
  console.log(`post_id: ${req.body.postId}`);
  console.log(`user_id: ${req.session.userId}`);
  try {
    const newComment = await Comment.create({
      'comment': req.body.comment,
      'post_id': req.body.postId,
      'user_id': req.session.userId
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get all comments
router.get('/', async (req, res) => {
  console.log('GET all comments');
  try {
    const comments = await Comment.findAll({
      include: [{ model: Post }],
    });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get single comment
router.get('/:id', async (req, res) => {
  console.log('GET single comment');
  try {
    const comment = await Comment.findByPk(req.params.id, {
      include: [{ model: Post }],
    });
    if (!comment) {
      res.status(404).json({ message: 'No comment found with that id!' });
      return
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err)
  }
});

// Update single comment
router.put('/:id', async (req, res) => {
  console.log('PUT single comment');
  console.log(req.body);
  try {
    const updatedComment = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete single comment
router.delete('/:id', async (req, res) => {
  console.log('DELETE single comment');
  try {
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedComment) {
      res.status(404).json({ message: 'No comment found with that id!' });
      return
    }
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;