"use strict"
const User = require('../models/user.js');


exports.addUser = (email, firstName, lastName, password) => {
  return new User({email: email, password: password, firstName: firstName, lastName: lastName}).save();
};

exports.getUser = (email) => {
  // return new File().fetch({email: email}).then((data) => callback(data.attributes))
  return new File().fetch({email: email})
};

exports.getAllUsers = (fileName,callback) => {
  new File().query('where','csvTitle','=',fileName).fetch().then((data) => callback(data.attributes))
};
