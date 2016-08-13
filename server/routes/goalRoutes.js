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
router.get()

//Post goals for specific user
router.post('/', (req ,res, next) => {

  let userID = tokenUtil.getUserIDFromToken(req.headers['x-access-token']);

  if(req.body.goals){
    goalUtil.addUserGoalsToDB(req.body.goals,userID);
  }

});
