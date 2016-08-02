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

//expense.Date needs to be formatted properly
exports.addAllExpenses = (expenseDataArr, callback) => {
  expenseDataArr.forEach((expense) => {
    new Expense({csvId: 1, description: expense.Description, amount: expense.Amount, category: expense.Category}).save()
  });
  callback('success');
};


/**
  This function will take a callback which will work on an array of expense data objects.
  data.models is an array where EACH element has an 'attributes' (i.e. data.models[0].attributes)
*/
exports.getAllExpenses = (callback) => {
  new Expense().fetchAll().then((data) => callback(data.models));
};

exports.updateExpenseCategory = (expenseId, category, callback) => {
  new Expense({id: expenseId}).save({category: category}).then(() => {
    callback('success');
  });
}
