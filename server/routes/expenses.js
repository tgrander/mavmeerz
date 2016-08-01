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
  });
});

// bulk update expenses
router.put('/', (req, res) => {
  res.send('bulk update expenses');
});

// update specific expense
router.put('/:id', (req, res) => {
  res.send('update specific expenses');
});

module.exports = router;
