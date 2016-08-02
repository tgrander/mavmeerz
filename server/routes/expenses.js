const express = require('express');
const router  = express.Router();
const util    = require('../util/util.js');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Request at /expenses received!');
  next();
});

// get expenses
router.get('/', (req, res) => {
  // get all expenses from DB and send response
  util.getExpensesFromDB(expenses => res.send(expenses));
});

// send expenses
router.post('/', (req, res) => {
  // replace with make-do fn for now using express-csv middleware
  util.parseCSVArr(req.body, (results) => {
    // add results to dB
    util.addExpensesToDB(results, (success) => {
      console.log('got to addExpensesToDB callback');
      if (success) {
        util.getExpensesFromDB(expenses => res.status(201).send(expenses));
      } else {
        // res.sendStatus(FAIL);
      }
    });
  });
});

// bulk update expenses
router.put('/', (req, res) => {
  // utility function to update category for an array of
  // expenses in expenses DB

  res.send('bulk update expenses');
});

// update specific expense
router.put('/:id', (req, res) => {
  let expenseId = req.url.slice(1);
  let category  = req.body.category;
  util.updateExpenseCategoryinDB(expenseId, category, (success) => {
    if (success) {
      util.getExpensesFromDB(expenses => res.send(expenses));
    }
  });
});

module.exports = router;
