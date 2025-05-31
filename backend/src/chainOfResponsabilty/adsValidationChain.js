const ValidateUserExists = require('./validateUserExists');
const ValidateAdType = require('./validateAdType');
const ValidateAdLimit = require('./validateAdLimit');

const userCheck = new ValidateUserExists();
const typeCheck = new ValidateAdType();
const limitCheck = new ValidateAdLimit();

userCheck.setNext(typeCheck).setNext(limitCheck);

module.exports = userCheck;
