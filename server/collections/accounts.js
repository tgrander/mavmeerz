const db = require('../db.js');
const Account = require('../models/account');

const Accounts = new db.Bookshelf.Collection();

Accounts.model = Account;

module.exports = Accounts;
