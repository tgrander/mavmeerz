"use strict"
const Account = require('../models/account.js');

exports.addAccount = (accountInfo) => {
  return new Account({name: accountInfo.name, userId: accountInfo.userId}).save();
};

exports.retrieveAccount = (accountInfo) => {
  return new Account({name: accountInfo.name, userId: accountInfo.userId}).fetch()
};
