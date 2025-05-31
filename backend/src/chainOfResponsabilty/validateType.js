const Handler = require('./baseHandler');
const adFactory = require('../factory/adFactory');

class ValidateAdType extends Handler {
  async handle(request) {
    if (!request.type || typeof request.type !== 'string') {
      throw new Error('Tipo de anúncio não especificado ou inválido.');
    }

    const type = request.type.toLowerCase();
    const factoryMethod = `create${type.charAt(0).toUpperCase() + type.slice(1)}Ad`;

    const validTypes = Object.keys(adFactory); // ['createSaleAd', 'createDonationAd', 'createExchangeAd']

    if (!validTypes.includes(factoryMethod)) {
      throw new Error('Tipo de anúncio inválido.');
    }

    request.type = type; // padroniza para minúsculo (caso esteja em maiúsculas)
    return super.handle(request);
  }
}

module.exports = ValidateAdType;