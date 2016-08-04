"use strict"
/**
 *   Creates our schema for storing our app's data. We create two tables,
 *   one to store csv file names and one to store the expense data.
 */

 const knex = require('knex')({
   client: 'mysql',
   connection: {
     host     : '127.0.0.1',
     port     : '3306',
     user     : 'root',
     password : '',
     database : 'zenmoDB',
     charset  : 'utf8'
   }
 });

knex.schema.hasTable('csv').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('csv', function(table) {
      table.increments('id').primary();
      table.string('csvTitle');
      table.timestamps();
    });
  }
});

knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('email', 100).unique();
      user.string('password', 100);
      user.string('firstName', 100);
      user.string('lastName', 100);
      user.timestamps();
    });//.then(function () {
      //console.log('Created users table');
    //});
  }
});


knex.schema.hasTable('expenses').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('expenses', function(table) {
      table.increments('id').primary();
      table.integer('csvId').unsigned().references('id').inTable('csv');
      table.string('description');
      table.float('amount',6,2);
      table.string('category');
      table.date('date')
      table.timestamps();
    });
  }
});

const Bookshelf = require('bookshelf')(knex);

module.exports = Bookshelf;
