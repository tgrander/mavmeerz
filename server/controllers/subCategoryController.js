"use strict"
const subCategory = require('../models/subCategory.js');

exports.addSubCategory = (sCat) => {
  new subCategory({sub_category: sCat}).save();
};

exports.getSubCategoryId = (cat) => {
  return new Promise((resolve,reject) => {
    new subCategory().query("where", "sub_category", "=", cat).fetch().then((data) => {
      resolve(data.attributes.id)
    })
  });
};

exports.checkSubCategoryTable = () => {
  return new Promise((resolve,reject) => {
      new subCategory().fetch().then((data) => resolve(data));
  });
}
