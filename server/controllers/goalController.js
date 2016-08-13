"use strict"
const Goal = require('../models/goal.js');
const subCatController = require('./subCategoryController.js')

exports.addGoal = (userGoal) => {
  subCatController.getSubCategoryId(userGoal.subCat).then((subCatId) => {
    new Goal({userId: userGoal.userId, subCatId: subCatId, amount: userGoal.amount}).save();
  });
};

exports.updateGoal = (userGoal) => {
  subCatController.getSubCategoryId(userGoal.subCat).then((subCatId) => {
    new Goal().where({userId: userGoal.userId, subCatId: subCatId}).fetch().then((goalData) => {
      new Goal({id: goalData.attributes.id}).save({amount: userGoal.amount})
    });
  });
};
