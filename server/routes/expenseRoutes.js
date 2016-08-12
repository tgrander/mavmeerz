"use strict"
const express     = require('express')
    , router      = express.Router()
    , expenseUtil = require('../util/expenseUtil.js')
    , tokenUtil   = require('../util/tokenUtil.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Request at /expenses received!');
  next();
});

// get expenses
router.get('/', (req, res, next) => {
  let userID = tokenUtil.getUserIDFromToken(req.headers['x-access-token']);
  // get all expenses from DB and send response
  expenseUtil.getExpensesFromDB({id: userID}).then(expenses => res.send(expenses));
});

// send expenses, currently expects 'text/csv'
router.post('/', (req, res, next) => {
  let userID = tokenUtil.getUserIDFromToken(req.headers['x-access-token']);
    console.log(req.headers);
    // check if proper request made
    if (req.body.expenses) {
      // add expenses to dB
      expenseUtil.addExpensesToDB(req.body.expenses,userID)
      // send back expenses array as default response
      .then(success => expenseUtil.getExpensesFromDB({id: userID}))
      .catch(err => console.log('error in addExpensesToDB:', err))
      .then(expenses => res.status(201).send(expenses))
      .catch(err => console.log('Error in getExpensesFromDB:', err));
    } else {
      res.send('request body needs expenses!');
    }
});

// bulk update expenses
router.put('/', (req, res) => {
  let userID = tokenUtil.getUserIDFromToken(req.body.token);
  // utility function to update category for an array of
  // expenses in expenses DB
  if (req.body.expenses) {
    //expenses = array of ids of expenses to be updated
    const expenses = req.body.expenses,
          category = req.body.category
    expenseUtil.bulkUpdateExpenseCategoriesinDB(expenses, category)
      .then(success => expenseUtil.getExpensesFromDB({id: userID}))
      .then(expenses => res.send(expenses));
  } else {
    res.send('request body needs expenses!');
  }
});

// update specific expense
router.put('/:id', (req, res) => {
  let userID = tokenUtil.getUserIDFromToken(req.headers['x-access-token']);

  if (req.body.category) {
    let expenseId = req.url.slice(1);
    let category  = req.body.category;
    expenseUtil.updateExpenseCategoryinDB(expenseId, category)
       // send back expenses array as default response
      .then(success => expenseUtil.getExpensesFromDB({id: userID}))
      .then(expenses => res.send(expenses));
  } else {
    res.send('request body needs categories!');
  }
});

module.exports = router;
