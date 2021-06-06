const User = require('../models/userModel');

exports.register = async (req, res, next) => {
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
        address: req.body.address,
        contact: req.body.contact,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    });

    res.status(201).json({
        user,
    });
};
