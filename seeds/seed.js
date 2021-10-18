const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const posts of postData) {
        await Post.create({
            ...posts,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    // Need to seed test comment data

    for (const comments of commentData) {
        await Comment.create({
            ...comments,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    console.log("-----DATA HAS BEEN SEEDED!-----")

    process.exit(0);
}

seedDatabase();