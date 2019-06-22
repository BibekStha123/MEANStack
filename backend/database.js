const mongojs = require('mongojs');
const db = mongojs('customers', ['customerlist', 'users']);


const database = {
    mongojs: mongojs,
    db: db
};

module.exports = database;