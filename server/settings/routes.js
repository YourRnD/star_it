'use strict';

module.exports = (app) => {
    const usersController = require('./../Controller/UsersController');

    //api/users
    app
        .route('/api/users/getAllUsers')
        .get(usersController.getAllUsers);
};