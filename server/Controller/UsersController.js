'use strict';

const response = require('./../response');
const db = require('../settings/db');

// api/users/getAllUsers
exports.getAllUsers = (req, res) => {

    db.query('SELECT `id`, `name`, `second_name`, `email` FROM `users`', (error, rows, fields) => {
        if (error) {
            response.status(404, error, res);
        } else {
            response.status(200, rows, res)
        }
    });

}
