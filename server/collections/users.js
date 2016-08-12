const db = require('../db.js');
const User = require('../models/user');

const Users = new db.Bookshelf.Collection();

Users.model = User;

module.exports = Users;
