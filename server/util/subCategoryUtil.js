"use strict"
const subCategoryController = require('../controllers/subCategoryController.js');
const catData = require('../categoriesData.js');

function initialSubCatTableFill() {
  catData.forEach((catObj) => {
    for(var mainCat in catObj){
      catObj[mainCat].forEach((subCat) => subCategoryController.addSubCategory(subCat,0))
    }
  });
}

function checkInitialSubCatTableFill() {
  return subCategoryController.checkSubCategoryTable()
}

module.exports = {
  initialSubCatTableFill: initialSubCatTableFill,
  checkInitialSubCatTableFill: checkInitialSubCatTableFill
}
