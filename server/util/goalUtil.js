"use strict"
const goalController = require('../controllers/goalController.js');

function addUserGoalsToDB(userGoals,userId) {
  userGoals.forEach((goal) => {
    goal.userId = userId;
    goalController.addGoal(goal)
  });
};


module.exports = {
  addUserGoalsToDB: addUserGoalsToDB
}
