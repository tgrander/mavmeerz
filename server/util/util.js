const fs  = require('fs');
const csv = require('csv');
const testCSV = __dirname + '/../test.csv';
const expenseController = require('../controllers/expenseController.js');
const CSVController     = require('../controllers/csvFileController.js');

// parsing the CSV //

function parseCSV(FILE) {
  return new Promise(function(resolve, reject) {
    const file   = fs.createReadStream(FILE);
    const parser = csv.parse({
      columns:    true,
      auto_parse: true
    });

    let results = [];

    file.pipe(parser);
    parser.on('readable', () => {
      let record;

      // push row('record') to results until done
      while (record = parser.read()) {
        // invokes callback for each row of csv
        results.push(record);
      }
    });
    parser.on('finish', () => {
      if (results.length == 0) reject('nothing in CSV file!');
      else resolve(results);
    });
  });
}

function parseCSVArr(arr, callback) {
  let headers = arr[0];
  let results = [];
  for (let i = 1; i < arr.length; i++) {
    let expense       = arr[i];
    let expenseResult = {};
    for (let j = 0; j < expense.length; j++) {
      expenseResult[headers[j]] = expense[j];
    }
    results.push(expenseResult);
  }
  callback(results);
}

function addExpensesToDB(expenses, callback) {
    CSVController.addFile('expenses', () => {
      console.log('got to CSVController.addFile callback!');
      //insert CSV ID and other thing here
      expenseController.addAllExpenses(expenses, (success) => {
        console.log('got to expenseController.addAllExpenses callback!');
        // yay success
        callback(success);
      });
    });
}

function getExpensesFromDB(callback) {
  let results = [];
  expenseController.getAllExpenses((expenses) => {
    expenses.forEach((expense) => {
      results.push(expense.attributes);
    });
  callback(results)
  });
}

function updateExpenseCategoryinDB(expenseId, category, callback) {
  expenseController.updateExpenseCategory(expenseId, category, (success) => {
    if (success) callback(success);
  });
}

/// TO TEST FN (since have not implemented promises in test suite yet)
// parseCSV(testCSV)
//   .then(function(results) {
//     // add to db
//     console.log(results);
//   });

module.exports = { parseCSV:    parseCSV,
                   parseCSVArr: parseCSVArr,
                   addExpensesToDB: addExpensesToDB,
                   getExpensesFromDB: getExpensesFromDB,
                   updateExpenseCategoryinDB: updateExpenseCategoryinDB };
