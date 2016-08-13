"use strict"
const express     = require('express')
    , router      = express.Router()
    , expenseUtil = require('../util/expenseUtil.js')
    , tokenUtil   = require('../util/tokenUtil.js')
    , goalUtil    = require('../util/goalUtil.js')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Request at /goals received!');
  next();
});

//get goals for specific user
// router.get()

//Post upated goals for specific user
router.post('/updateGoals', (req ,res, next) => {

  let userID = tokenUtil.getUserIDFromToken(req.headers['x-access-token']);

  if(req.body.goals){
    goalUtil.updateUserGoalsToDB(req.body.goals,userID);
  }
  res.status(201).send()
});

module.exports = router;
