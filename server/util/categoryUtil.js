"use strict"
const categoryController = require('../controllers/categoryController.js');
const catData = require('../categoriesData.js');

function initialCatTableFill() {
  catData.forEach((catObj) => {
    for(var mainCat in catObj){
      categoryController.addCategory(mainCat);
    }
  });
}

function checkInitialCatTableFill() {
  return categoryController.checkCategoryTable()
}

module.exports = {
  initialCatTableFill: initialCatTableFill,
  checkInitialCatTableFill: checkInitialCatTableFill
}
