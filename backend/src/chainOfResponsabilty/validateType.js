const Handler = require('./baseHandler');

class ValidateAdType extends Handler {
  async handle(request) {
    const validTypes = ['sale', 'donation', 'exchange'];
    if (!validTypes.includes(request.type)) {
      throw new Error('Tipo de anúncio inválido.');
    }
    return super.handle(request);
  }
}

module.exports = ValidateAdType;
