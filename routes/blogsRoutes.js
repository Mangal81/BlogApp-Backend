const express = require('express');
const homePage = require('../controller/likeController');
const commentController = require('../controller/commentController');
const {postController,getPost} = require('../controller/postController');
const router = express.Router();


router.get('/homepage',homePage)
router.post('/comment/create', commentController);
router.post('/post/create', postController);
router.get('/posts',getPost)


module.exports = router;




