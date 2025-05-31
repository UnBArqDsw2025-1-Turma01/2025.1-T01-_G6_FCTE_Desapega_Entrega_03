const Handler = require('./baseHandler');
const db = require('../models');

class ValidateUserExists extends Handler {
  async handle(request) {
    const user = await db.User.findByPk(request.userId);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
    return super.handle(request);
  }
}

module.exports = ValidateUserExists;
