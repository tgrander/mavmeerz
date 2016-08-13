"use strict"
const joinCategoryController = require('../controllers/joinCategoryController.js');
const categoryController = require('../controllers/categoryController.js');
const subCategoryController = require('../controllers/subCategoryController.js');
const catData = require('../categoriesData.js');

function initialJoinCatTableFill() {
  catData.forEach((catObj) => {
    for(var mainCat in catObj){
      catObj[mainCat].forEach((subCat) => {
        categoryController.getCategoryId(mainCat).then((mainCatId) => {
          subCategoryController.getSubCategoryId(subCat).then((subCatId)=>{
            joinCategoryController.addJoinCategory(mainCatId,subCatId)
          });
        });
      });
    };
  });
}

module.exports = {
  initialJoinCatTableFill: initialJoinCatTableFill,
}
