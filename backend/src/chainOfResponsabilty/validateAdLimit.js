
const Handler = require('./baseHandler');
const db = require('../models');

class ValidateAdLimit extends Handler {

  async handle(request) {
    const count = await db.Ad.count({
      where: {
        userId: request.userId,
        isActive: true
      }
    });
    if (count >= 10) {
      throw new Error('Limite de anúncios ativos atingido (máximo 10).');
    }
    return super.handle(request);
  }
}

module.exports = ValidateAdLimit;