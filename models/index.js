const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// -USER
// A Useer has many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// A User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// -POST
// Posts belong to users
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Posts have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// -COMMENT
// Comments belong to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// Comments belong to a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})


module.exports = { Post, User, Comment };