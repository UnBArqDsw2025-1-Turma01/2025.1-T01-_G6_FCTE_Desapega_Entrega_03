const adFactory = require('../factory/adFactory');
const adService = require('../services/ad.service');
const adsValidationChain = require('../chainOfResponsabilty/adsValidationChain');
const AdFacade = require('../facades/ad.facade');

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
    await adsValidationChain.handle(req.body);

    const { type } = req.body;
    console.log('🔎 Tipo recebido:', type);

    // Corrija aqui: crie capitalizedType antes de usar
    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

    console.log('Chaves da factory:', Object.keys(adFactory));
    console.log('capitalizedType:', capitalizedType);

    // Use capitalizedType para buscar a factory correta
    const factory = adFactory[`create${capitalizedType}Ad`];

    if (typeof factory !== 'function') {
      throw new Error(`Factory para tipo '${type}' não encontrada.`);
    }

    const newAd = await factory(req.body);
    res.status(201).json(newAd);

  } catch (err) {
    console.error('❌ ERRO AO CRIAR ANÚNCIO:', err.message);
    next(err);
  }
}

async function getAdsByType(req, res, next) 
{
  try
  {
    const ads = await AdFacade.getAdsByType(req.params.type);
    res.status(200).send(ads);
  } 
  catch(err)
  {
    res.status(500).send({ message: 'Erro ao buscar anúncioas', error: err.message });
  } 
}


async function updateAd(req, res, next)
{
  try
  {
    const updated_ad = await AdFacade.updateAd(req.params.id, req.body);
    res.status(200).send(updated_ad, {message: 'Anúncio editado com sucesso!'});
  }
  catch(err)
  {
    res.status(500).send({message: "❌ Erro ao tentar atualizar o anúncio ❌", error: err.message});
  }
}

async function deleteAdById(req, res, next)
{
  try
  {
    await AdFacade.deleteAdById(req.params.id);
    res.status(200).send({message: '☑️ Anúncio deletado com sucesso!'});
  }
  catch(err)
  {
    res.status(500).send({message: '❌ Erro ao deletar anúncio', error: err.message});
  }
}

async function getAdById(req, res, next) {
  try {
    const { id } = req.params;
    const ad = await adService.findAdById(req.params.id);
    if (!ad) {
      return res.status(404).json({ message: 'Anúncio não encontrado.' });
    }
    res.status(200).send(ad);
  } catch (err) {
    res.status(500).send({message: '❌ Erro ao deletar anúncio', error: err.message});
  }
}

module.exports = {
  getAds,
  getAdById,
  postAd,
  getAdsByType,
  deleteAdById,
  updateAd,
};