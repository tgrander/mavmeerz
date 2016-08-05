const express = require('express');
const router  = express.Router();
const util    = require('../util/userUtil.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Request at /users received!');
  next();
});

// post login
router.post('/signup', (req, res) => {
  let userInfo = req.body;

  if (userInfo.email !== undefined && userInfo.password !== undefined) {
    util.addUserToDB(userInfo)
      .then((results) => {
        // create token
        console.log(results);
        res.status(201).send(results);
      });
  };
});

router.post('/login', (req, res) => {
  let userInfo = req.body;

  if (userInfo.email !== undefined && userInfo.password !== undefined) {
    util.attemptLogin(userInfo)
      .then((results) => {
        // create token
        console.log(results);
        res.status(201).send(results);
      })
  }
});

module.exports = router;
