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
  // return new File().fetch({email: email}).then((data) => callback(data.attributes))
  return new User().fetch({email: user.email})
};

exports.getAllUsers = (fileName,callback) => {
  new File().query('where','csvTitle','=',fileName).fetch().then((data) => callback(data.attributes))
};
