"use strict"
const subCategory = require('../models/subCategory.js');

exports.addSubCategory = (sCat) => {
  new subCategory({sub_category: sCat}).save();
};

exports.checkSubCategoryTable = () => {
  return new Promise((resolve,reject) => {
      new subCategory().fetch().then((data) => resolve(data));
  });
}
