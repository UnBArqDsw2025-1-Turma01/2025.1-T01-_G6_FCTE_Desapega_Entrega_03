const Handler = require('./baseHandler');
const db = require('../models');

class ValidateAdLimit extends Handler {
  async handle(request) {
    const count = await db.Ad.count({ where: { userId: request.userId } });
    if (count >= 10) {
      throw new Error('Limite de anúncios atingido.');
    }
    return super.handle(request);
  }
}

module.exports = ValidateAdLimit;
