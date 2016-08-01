const expect   = require('chai').expect;
      util     = require('../../util/util');
      csv      = require('csv'),
      // uncomment when you have placed a test.csv file in server route
      // testCSV  = __dirname + '../../test.csv';

describe('parsing the CSV file', () => {
  it('should have a parseCSV function', () => {
    expect(util.parseCSV).to.exist;
  });

  // uncomment when you have placed a test.csv file in server route
  // TO-DO: fix test to properly test for promises
  xit('should be able to take results from stream', () => {
    let promise = util.parseCSV;

    promise(testCSV)
      .then(function(data){
        expect(data.length).to.not.equal(0);
      });
    expect(promise).to.be.fulfilled;
  });
});
