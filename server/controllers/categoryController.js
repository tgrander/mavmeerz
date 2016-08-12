"use strict"
const Category = require('../models/category.js');

exports.addCategory = (cat) => {
  new Category({category: cat}).save();
};

exports.checkCategoryTable = () => {
  return new Promise((resolve,reject) => {
      new Category().fetch().then((data) => resolve(data));
  });
};

exports.getCategoryId = (cat) => {
  return new Promise((resolve,reject) => {
    new Category().query("where", "category", "=", cat).fetch().then((data) => {
      resolve(data.attributes.id)
    })
  });
};
