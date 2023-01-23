

const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

module.exports = app => {
  app.set('trust proxy', 1);
  
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 1500000
      },
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/book-collection'
        // mongoUrl: process.env.MONGODB_URI || 'mongodb://127.0.01:27017/book-collection'
      })
    })
  );
};
