const adFactory = require('../factory/adFactory');


async function getAds(req, res, next) {
  try {
    const ads = await require('../services/ad.service').findAllAds();
    res.json(ads);
  } catch (err) {
    next(err);
  }
}

async function postAd(req, res, next) {
    try {
      const { type } = req.body;
      console.log('🔎 Tipo recebido:', type);

  
      const factoryMethods = {
        sale: adFactory.createSaleAd,
        donation: adFactory.createDonationAd,
        exchange: adFactory.createExchangeAd
      };
  
      const factory = factoryMethods[type];
  
      if (!factory) {
        return res.status(400).json({ message: 'Tipo de anúncio inválido.' });
      }
  
      // Só envia o objeto completo:
      const newAd = await factory(req.body);
      res.status(201).json(newAd);
    } catch (err) {
      console.error('❌ ERRO AO CRIAR ANÚNCIO:', err);
      next(err);
    }
  }

module.exports = {
  getAds,
  postAd,
};