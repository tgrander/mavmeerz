"use strict"
const Goal = require('../models/goal.js');

exports.addGoal = (userGoal) => {
  new Goal({userId: userGoal.userId, subCatId: userGoal.subCatId, amount: userGoal.amount}).save();
};
