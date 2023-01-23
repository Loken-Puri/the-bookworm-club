const router = require("express").Router();
const session = require('express-session')
const mongo = require('connect-mongo')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
