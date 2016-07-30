"use strict"
const Expense = require('../models/expense.js')


exports.addExpense = (csvId, description, cost, category, callback) => {
  new Expense({csvId: csvId, description: description, cost: cost, category: category}).save().then(callback);
};
