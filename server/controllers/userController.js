"use strict"
const User = require('../models/user.js');


exports.addUser = (user) => {
  return new User({
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName
  }).save();
};


exports.getUser = (user) => {
  return new Promise((resolve,reject) => {
    new User().fetch({id: user.id}).then((data) => {
      resolve(data.attributes)
    })
  });
};
