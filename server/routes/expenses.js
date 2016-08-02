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
  res.send('get expenses');
  // get all expenses from DB

  // convert to json

  // send as response

});

// send expenses
router.post('/', (req, res) => {
  // replace with make-do fn for now using express-csv middleware
  util.parseCSVArr(req.body, (results) => {
    console.log(
      'results from "text/csv" request! (uncomment on line 23 of server/routes/expenses.js)',
      results
    );
    // add results to dB
    util.addExpensesToDB(results, (success) => {
      console.log('got to addExpensesToDB callback');
      // yay success, send 201
      res.sendStatus(201);
      // or reroute to '/' get
      // res.redirect('/');
      // if not success send fail message
      // res.sendStatus(FAIL);
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
  // utility function to update category for specific
  // id in expenses DB

  res.send('update specific expenses');
});

module.exports = router;
