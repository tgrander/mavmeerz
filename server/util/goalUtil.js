"use strict"
const goalController = require('../controllers/goalController.js');

function addUserGoalToDB(userGoal) {
  return goalController.addGoal(userGoal)
}


module.exports = {
  addUserGoalToDB: addUserGoalToDB
}
