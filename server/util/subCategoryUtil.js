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

function updateSubCatEss(subCat,essState) {
  return subCategoryController.updateSubCategoryEss(subCat,essState)
}

function checkInitialSubCatTableFill() {
  return subCategoryController.checkSubCategoryTable()
}

function getAllSubCatIds() {
  return subCategoryController.getAllSubCategoryId()
}

module.exports = {
  initialSubCatTableFill: initialSubCatTableFill,
  checkInitialSubCatTableFill: checkInitialSubCatTableFill,
  getAllSubCatIds:  getAllSubCatIds,
  updateSubCatEss: updateSubCatEss
}
