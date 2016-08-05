const Bookshelf = require('../db.js');
const User = require('../models/user');

const Users = new Bookshelf.Collection();

Users.model = User;

module.exports = Users;
