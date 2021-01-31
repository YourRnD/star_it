'use strict';

module.exports = (app) => {
    const usersController = require('./../Controller/UsersController');

    //api/users
    app
        .route('/api/users/getAllUsers')
        .get(usersController.getAllUsers);
    app
        .route('/api/users/signup')
        .post(usersController.signup);
    app
        .route('/api/users/signin')
        .get(usersController.signin);
};