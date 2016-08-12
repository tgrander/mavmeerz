"use strict"
const express = require('express');
const router  = express.Router();
const util    = require('../util/userUtil.js');
const createToken = require('../util/tokenUtil').createToken
const catUtil = require('../util/categoryUtil.js')
const subCatUtil = require('../util/subCategoryUtil.js')
const joinCatUtil = require('../util/joinCategoryUtil.js')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Request at /users received!');
  next();
});

// post login
router.post('/signup', (req, res) => {
  let userInfo = req.body;

  catUtil.checkInitialCatTableFill().then((exists) => {
    if(!exists){
      catUtil.initialCatTableFill();
      subCatUtil.initialSubCatTableFill();
      joinCatUtil.initialJoinCatTableFill();
    }
  });

  if (userInfo.email !== undefined && userInfo.password !== undefined) {
    util.addUserToDB(userInfo)
      .then((results) => {
        createToken(req, res, results.id)
        // below code not needed becasue createToken() handles response
        // res.status(201).send(results);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  };
});

router.post('/login', (req, res) => {
  let userInfo = req.body;
  if (userInfo.email !== undefined && userInfo.password !== undefined) {

    util.attemptLogin(userInfo)
      .then((results) => {
        createToken(req, res, results.id)
        // below code not needed becasue createToken() handles response
        // res.status(201).send(results);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  }
});

module.exports = router;
