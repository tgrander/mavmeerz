const fs  = require('fs');
const csv = require('csv');
const testCSV = __dirname + '/../test.csv';

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
};

function parseCSVArr(arr) {
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
  return results;
};

/// TO TEST FN (since have not implemented promises in test suite yet)
// parseCSV(testCSV)
//   .then(function(results) {
//     // add to db
//     console.log(results);
//   });

module.exports = { parseCSV: parseCSV,
                   parseCSVArr: parseCSVArr };
