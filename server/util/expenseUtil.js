"use strict"
const fs  = require('fs');
const csv = require('csv');
const testCSV = __dirname + '/../test.csv';
const expenseController = require('../controllers/expenseController.js');
const CSVController     = require('../controllers/csvFileController.js');

function addExpensesToDB(expenses, userId) {
    // CSVController.addFile is here because it is required to
    // link a foreign id to the expense table. The CSV table will
    // eventually be replaced by a user table

  return new Promise((resolve, reject) => {
    CSVController.addFile('expenses')
      .then((fileId) => {
        return expenseController.addAllExpenses(processExpenses(expenses),fileId);
      })
      .then(() => {
        resolve('success');
      })
      .catch((err) => console.log('error in addAllExpenses', err));
  });
}

// takes expenses from MySQL db, puts them into an array of objects,
// and then sends it into a callback
function getExpensesFromDB() {
  let results = [];
  return new Promise((resolve, reject) => {
    expenseController.getAllExpenses()
      .then((expenses) => {
        expenses.forEach((expense) => {
          results.push(expense.attributes);
        });
        resolve(results);
      });
  });
}

// takes an expenseId and a category,
// updates the database entry with the category,
// and sends it into a callback if successful
function updateExpenseCategoryinDB(expenseId, category, callback) {
  // expenseController.updateExpenseCategory(expenseId, category, (success) => {
  //   if (success) callback(success);
  // });
  return new Promise((resolve, reject) => {
    expenseController.updateExpenseCategory(expenseId, category)
      .then(success => resolve(success));
  })

}

function bulkUpdateExpenseCategoriesinDB(expenses) {
  return new Promise((resolve, reject) => {
    expenses.forEach((expense) => {
      lowerCaseKeys(expense);
      expenseController.updateExpenseCategory(expense.id, expense.category);
    });
    resolve('success');
  });
}


// this makes sure every heading is lowercased regardless
// of the CSV it is coming from
function processExpenses(expenses) {
  let result = [];
  expenses.forEach(expense => {
    console.log(expense);
    // match cost check if cost is reported as amount instead
    // + match date
    // + match description
    matchHeaders(expense);
    console.log('this is the expense', expense);
    lowerCaseKeys(expense);
    console.log('this is the expense after lowerCaseKeys', expense);
    result.push(expense);
  });
  return result;
}

function matchHeaders(expense) {
  // anything that has 'cost' or 'amount' should be changed to 'amount'
  matchCostHeader(expense);
  matchDateHeader(expense);
  // matchDescriptionHeader(expenses);
}


//TO-DO combine matchDateHeader and matchCostHeader functions into one
function matchDateHeader(expense) {
 for (let key in expense) {
   if (key.match(/date/i)) {
     expense['date'] = expense[key];
     delete expense[key];
   }
 }
}

function matchCostHeader(expense) {
  for (let key in expense) {
    if (key.match(/cost/i) || key.match(/amount/i) || key.match(/debit/i)) {
      expense['amount'] = expense[key];
      delete expense[key];
    }
  }
}

function lowerCaseKeys(object) {
  for (let key in object) {
    lowerCaseKey(object, key);
  }
}

function lowerCaseKey(object, key) {
  object[key.toLowerCase()] = object[key];
};

module.exports = { addExpensesToDB: addExpensesToDB,
                   getExpensesFromDB: getExpensesFromDB,
                   updateExpenseCategoryinDB: updateExpenseCategoryinDB,
                   bulkUpdateExpenseCategoriesinDB: bulkUpdateExpenseCategoriesinDB,
                   processExpenses: processExpenses };
