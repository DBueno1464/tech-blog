const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment: req.body.contents,
            user_id: req.session.user_id,
            post_id: req.body.id,
        });
        res.status(200).json(newComment);
    }   catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;