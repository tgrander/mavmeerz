const userController = require('../controllers/userController.js');

function addUserToDB(userInfo) {
  return new Promise((resolve, reject) => {
    userController.addUser(userInfo)
      .then((user) => {
        resolve({
          id:        user.get('id'),
          email:     user.get('email'),
          firstName: user.get('firstName'),
          lastName:  user.get('lastName')
        });
      });
  });
}

function attemptLogin(userInfo) {
  return new Promise((resolve, reject) => {
    userController.getUser(userInfo.email)
      .then((user) => {
        user.comparePassword(userInfo.password, (matches) => {
          matches ? resolve({
            id:        user.get('id'),
            email:     user.get('email'),
            firstName: user.get('firstName'),
            lastName:  user.get('lastName')
          }) : reject('failure');
        });
      });
  });
}

module.exports = {
  addUserToDB: addUserToDB,
  attemptLogin: attemptLogin
};
