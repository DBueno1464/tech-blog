const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// */
router.get('/', async (req, res) => {
    try {
        // Get all Posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        console.log(postData);

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        console.log(posts);

        // Pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// */login
router.get('/login', (req, res) => {
    res.render('login');
});

// */dashboard
router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard');
});

// */newPost
router.get('/newPost', withAuth, (req, res) => {
    res.render('newPost');
});

// */commentPost
router.get('/commentPost', withAuth, (req, res) => {
    res.render('commentPost');
});

module.exports = router;