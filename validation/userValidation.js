const joi = require('joi');

// Validation for register route
const registerValidation = joi.object({ 
    name: joi.string().min(3).max(20).required(),
    email: joi.string().min(8).max(20).required(),
    password: joi.string().min(8).max(20).required()
});


// Validation for login route
const loginValidation = joi.object({ 
    email: joi.string().min(8).max(20).required(),
    password: joi.string().min(8).max(20).required()
});


module.exports = {
    registerValidation,
    loginValidation
}