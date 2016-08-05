"use strict"
const fs  = require('fs');
const csv = require('csv');
const testCSV = __dirname + '/../test.csv';
const expenseController = require('../controllers/expenseController.js');
const CSVController     = require('../controllers/csvFileController.js');

// parsing the CSV //

// not being used at the moment //

// this function refactors the parsedCSV from express-csv-middleware
// into an array of objects and then sends into a callback
// function parseCSVArr(arr, callback) {
//   return new Promise((resolve, reject) => {
//     let headers = arr[0];
//     let results = [];
//     for (let i = 1; i < arr.length; i++) {
//       let expense       = arr[i];
//       let expenseResult = {};
//       for (let j = 0; j < expense.length; j++) {
//         expenseResult[headers[j]] = expense[j];
//       }
//       results.push(expenseResult);
//     }
//     resolve(results);
//   });
// }

function addExpensesToDB(expenses, callback) {
    // CSVController.addFile is here because it is required to
    // link a foreign id to the expense table. The CSV table will
    // eventually be replaced by a user table

  return new Promise((resolve, reject) => {
    CSVController.addFile('expenses')
      .then(() => {
        return expenseController.addAllExpenses(lowerCaseCategories(expenses));
      })
      .then(() => {
        resolve('success');
      });
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
      expenseController.updateExpenseCategory(expense.id, expense.category);
    });
    resolve('success');
  });
}

// this makes sure every heading is lowercased regardless
// of the CSV it is coming from
function lowerCaseCategories(expenses) {
  let result = [];
  expenses.forEach(expense => {
    for (let key in expense) {
      expense[key.toLowerCase()] = expense[key];
      delete expense[key];
    }
    result.push(expense);
  });
  console.log('lower cased expenses!', result);
  return result;
}

/// TO TEST FN (since have not implemented promises in test suite yet)
// parseCSV(testCSV)
//   .then(function(results) {
//     // add to db
//     console.log(results);
//   });

module.exports = {
                  //  parseCSVArr: parseCSVArr,
                   addExpensesToDB: addExpensesToDB,
                   getExpensesFromDB: getExpensesFromDB,
                   updateExpenseCategoryinDB: updateExpenseCategoryinDB,
                   bulkUpdateExpenseCategoriesinDB: bulkUpdateExpenseCategoriesinDB };
