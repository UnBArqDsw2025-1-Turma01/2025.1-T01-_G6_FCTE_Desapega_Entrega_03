const Handler = require('./baseHandler');
const db = require('../models');

class ValidateUserExists extends Handler {
  async handle(request) {
    if (!request.userId) {
      throw new Error('Campo "userId" é obrigatório.');
    }

    const user = await db.User.findByPk(request.userId);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    return super.handle(request);
  }
}

module.exports = ValidateUserExists;
