const express = require('express');
const {homePage, like, unlike} = require('../controller/likeController');
const commentController = require('../controller/commentController');
const {postController,getPost} = require('../controller/postController');
const router = express.Router();


router.get('/homepage',homePage)
router.post('/comment/create', commentController);
router.post('/post/create', postController);
router.get('/posts',getPost)
router.post('/likes/like',like)
router.post('/likes/unlike',unlike)


module.exports = router;




