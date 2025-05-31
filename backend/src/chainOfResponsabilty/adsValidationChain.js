const ValidateUserExists = require('./validaterUserReal');
const ValidateAdType = require('./validateType');
const ValidateAdLimit = require('./validateAdLimit');

const userCheck = new ValidateUserExists();
const typeCheck = new ValidateAdType();
const limitCheck = new ValidateAdLimit();

userCheck.setNext(typeCheck).setNext(limitCheck);

module.exports = userCheck;
