"use strict"
const Expense = require('../models/expense.js')

/**
  This function will add individual expenses.
*/
exports.addExpense = (csvId, description, amount, category, callback) => {
  new Expense({csvId: csvId, description: description, amount: amount, category: category}).save().then(callback);
};

/**
  This function will take an array of expense data objects and then add
  each expense to the database.
*/
exports.addAllExpenses = (expenseDataArr, callback) => {
  expenseDataArr.forEach((expense) => {
    new Expense({csvId: expense.csvId, description: expense.description, amount: expense.amount, category: expense.category}).save();
  });
};


/**
  This function will take a callback which will work on an array of expense data objects.
  data.models is an array where EACH element has an 'attributes' (i.e. data.models[0].attributes)
*/
exports.getAllExpenses = (callback) => {
  new Expense().fetchAll().then((data) => callback(data.models));
};
