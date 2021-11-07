# Tech Blog

## Table of Contents

- [Description](#Description)
- [Installations](#Installations)
- [Links](#Links)

## Description

A CMS-style blog site where users can publish aritcles, blog posts, and their thoughts and opinions.

## Technologies

The technologies used in this application are: bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, sequelize.

## Installations

First, make sure we initiate oour schema file. You can do this by running this command in the terminal

```
mysql -u root -p
```

This will prompt you to input your mysql username and mysql password. Then, run

```
source db/schema.sql
```

After initiaing our schema files you can press ctrl+c to exit the mysql terminal and follow these next steps. Now we make sure we have all the libraries and packages needed to make our page run, simply run

```
npm install
```

in your terminal. Next, we run

```
npm run seed
```

to seed our data into our mysql database. Finally, we run our start script

```
"npm start"
```

and our page should be ready to go.

## Links:

Email: [DerrickBueno00@gmail.com](DerrickBueno00@gmail.com)

GitHub: [https://github.com/DBueno1464](https://github.com/DBueno1464)

Heroku: [Tech Blog](https://shielded-coast-48263.herokuapp.com)
