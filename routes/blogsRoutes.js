const express = require('express');
const homePage = require('../controller/likeController');
const commentController = require('../controller/commentController');
const postController = require('../controller/postController');
const router = express.Router();


router.get('/homepage',homePage)
router.post('/comment/create', commentController);
router.post('/post/create', postController);

module.exports = router;




