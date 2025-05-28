const adService = require('../services/ad.service');

async function getAds(req, res, next) {
    try {
        const ads = await adService.findAllAds();
        res.json(ads);
    } catch (err) {
        next(err);
    }
}

async function postAd(req, res, next) {
    try {
        const { title, description, pickupLocation, type, userId } = req.body;
        const newAd = await adService.createAd({ title, description, pickupLocation, type, userId });
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




