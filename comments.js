// Create web server

// Import express
const express = require('express');
// Import router
const router = express.Router();
// Import commentController
const commentController = require('../controllers/commentController');
// Import checkLogin middleware
const checkLogin = require('../middlewares/checkLogin');

// Get all comments
router.get('/', commentController.getAllComments);

// Get comment by id
router.get('/:id', commentController.getCommentById);

// Create new comment
router.post('/', checkLogin, commentController.createNewComment);

// Update comment
router.put('/:id', checkLogin, commentController.updateComment);

// Delete comment
router.delete('/:id', checkLogin, commentController.deleteComment);

// Export router
module.exports = router;