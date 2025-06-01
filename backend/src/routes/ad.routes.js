const { Router } = require('express');
const adController = require('../controllers/ad.controller'); 

console.log('✅ Arquivo ad.routes.js carregado');

const router = Router();

router.get('/', adController.getAds);
router.get('/:type', adController.getAdsByType);
router.post('/', adController.postAd);
router.patch('/:id', adController.updateAd);
router.delete('/:id', adController.deleteAdById);
router.get('/:id', adController.getAdById);

module.exports = router;
