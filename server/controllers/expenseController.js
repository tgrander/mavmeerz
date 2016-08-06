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
exports.addAllExpenses = (expenseDataArr) => {
  return new Promise((resolve, reject) => {
    console.log('expense data array lowercased ?', expenseDataArr[0]);
    expenseDataArr.forEach((expense) => {
      new Expense({description: expense.description, amount: expense.amount, category: expense.category}).save()
    });
    resolve('success');
  });
};

/**
  This function will take a callback which will work on an array of expense data objects.
  data.models is an array where EACH element has an 'attributes' (i.e. data.models[0].attributes)
*/
exports.getExpenses = (user) => {
  return new Expense().query("where", "userId", "=", user.id).fetch();
};

/**
  This function will take a callback which will work on an array of expense data objects.
  data.models is an array where EACH element has an 'attributes' (i.e. data.models[0].attributes)
*/
exports.getAllExpenses = () => {
  return new Promise((resolve,reject) => {
    new Expense().fetchAll().then((data) => {
      resolve(data.models)
    });
  });
  // return new Expense().fetchAll();
};

exports.updateExpenseCategory = (expenseId, category, callback) => {
  // new Expense({id: expenseId}).save({category: category}).then(() => {
  //   callback('success');
  // });
  return new Expense({id: expenseId}).save({category: category});
}
