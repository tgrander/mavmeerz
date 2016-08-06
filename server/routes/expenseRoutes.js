"use strict"
const express = require('express');
const router  = express.Router();
const util    = require('../util/expenseUtil.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Request at /expenses received!');
  next();
});

// get expenses
router.get('/', (req, res) => {
  // get all expenses from DB and send response
  util.getExpensesFromDB().then(expenses => res.send(expenses));
});

// send expenses, currently expects 'text/csv'
router.post('/', (req, res) => {
    // check if proper request made
    if (req.body.expenses) {
      // add expenses to dB
      util.addExpensesToDB(req.body.expenses)
      // send back expenses array as default response
      .then(success => util.getExpensesFromDB())
      .then(expenses => res.status(201).send(expenses));
    } else {
      res.send('request body needs expenses!');
    }
});

// bulk update expenses
router.put('/', (req, res) => {
  // utility function to update category for an array of
  // expenses in expenses DB
  if (req.body.expenses) {
    let expenses = req.body.expenses;
    util.bulkUpdateExpenseCategoriesinDB(expenses)
      .then(success => util.getExpensesFromDB())
      .then(expenses => res.send(expenses));
  } else {
    res.send('request body needs expenses!');
  }
});

// update specific expense
router.put('/:id', (req, res) => {
  if (req.body.category) {
    let expenseId = req.url.slice(1);
    let category  = req.body.category;
    util.updateExpenseCategoryinDB(expenseId, category)
       // send back expenses array as default response
      .then(success => util.getExpensesFromDB())
      .then(expenses => res.send(expenses));
  } else {
    res.send('request body needs categories!');
  }
});

module.exports = router;
