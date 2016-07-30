const express = require('express');
const router  = express.Router();

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
  res.send('post expenses');
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
