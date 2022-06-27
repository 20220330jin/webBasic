const express = require('express');

const router = express.Router();

// root route
router.get('/', function (req, res) {
    res.redirect('/posts')
})

router.get('/posts', function (req, res) {
    res.render('posts-list');
})

router.get('/new-post', function (req, res) {
    res.render('create-post');
})

router.post('/new-post', function (req, res) {
    res.render('create-post');
})

module.exports = router;