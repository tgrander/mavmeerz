"use strict"
const goalController = require('../controllers/goalController.js');
const subCategoryController = require('../controllers/subCategoryController.js');
const catData = require('../categoriesData.js');

// TODO change to update user goals instead of adding them
function addUserGoalsToDB(userGoals,userId) {
  userGoals.forEach((goal) => {
    goal.userId = userId;
    goalController.addGoal(goal);
  });
};

function updateUserGoalsToDB(userGoals,userId) {
  userGoals.forEach((goal) => {
    goal.userId = userId;
    goalController.updateGoal(goal);
  });
};

function initialGoalsTableFill(userId) {
  catData.forEach((catObj) => {
    for(var mainCat in catObj){
      catObj[mainCat].forEach((subCat) => {
        var initGoal = {
          userId: userId,
          subCat: subCat,
          amount: 0
        }
        goalController.addGoal(initGoal);
      });
    };
  });
};

module.exports = {
  addUserGoalsToDB: addUserGoalsToDB,
  updateUserGoalsToDB: updateUserGoalsToDB,
  initialGoalsTableFill: initialGoalsTableFill
}
