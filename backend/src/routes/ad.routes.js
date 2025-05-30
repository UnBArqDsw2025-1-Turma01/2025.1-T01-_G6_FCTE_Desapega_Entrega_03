const { Router } = require('express');
const adController = require('../controllers/ad.controller'); 

console.log('✅ Arquivo ad.routes.js carregado');

const router = Router();

router.get('/', adController.getAds);
router.post('/', adController.postAd);
router.get('/:id', adController.getAdById);

module.exports = router;
