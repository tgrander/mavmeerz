const fs  = require('fs');
const csv = require('csv');
const testCSV = __dirname + '/../test.csv';
const expenseController = require('../controllers/expenseController.js');
const CSVController     = require('../controllers/csvFileController.js');

// parsing the CSV //

// not being used at the moment //
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

// this function refactors the parsedCSV from express-csv-middleware
// into an array of objects and then sends into a callback
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
    // CSVController.addFile is here because it is required to
    // link a foreign id to the expense table. The CSV table will
    // eventually be replaced by a user table
    CSVController.addFile('expenses', () => {
      //insert CSV ID and other thing here
      expenseController.addAllExpenses(expenses, (success) => {
        callback(success);
      });
    });
}

// takes expenses from MySQL db, puts them into an array of objects,
// and then sends it into a callback
function getExpensesFromDB(callback) {
  let results = [];
  expenseController.getAllExpenses((expenses) => {
    expenses.forEach((expense) => {
      results.push(expense.attributes);
    });
  callback(results)
  });
}

// takes an expenseId and a category,
// updates the database entry with the category,
// and sends it into a callback if successful
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
