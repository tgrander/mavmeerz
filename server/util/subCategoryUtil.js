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

function getAllSubCats() {
  return subCategoryController.getAllSubCategories()
}

function replaceSubCategoryIDWithName(expenses) {
  return new Promise((resolve, reject) => {
    let results = [];
    let promises = [];

    for (let i = 0; i < expenses.length; i++) {
      promises.push(subCategoryController.getSubCategoryNameFromId(expenses[i].categoryId)
        .then((subCategory) => {
          expenses[i].category = subCategory;
          results.push(expenses[i]);
        }));
    }

    Promise.all(promises).then(() => resolve(results));
    });
}

module.exports = {
  initialSubCatTableFill: initialSubCatTableFill,
  checkInitialSubCatTableFill: checkInitialSubCatTableFill,
  replaceSubCategoryIDWithName: replaceSubCategoryIDWithName,
  getAllSubCats:  getAllSubCats,
  updateSubCatEss: updateSubCatEss
}
