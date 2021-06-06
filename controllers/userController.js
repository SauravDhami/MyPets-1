//const User = require('../models/userModel');

exports.login = (req, res, next) => {
    const test = 'test succesfull';
    console.log('hello');

    res.json({
        test,
    });
};
