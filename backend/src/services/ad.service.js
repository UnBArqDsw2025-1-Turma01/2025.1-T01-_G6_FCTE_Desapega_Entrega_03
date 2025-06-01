const db = require('../models');

async function findAllAds() {
  return await db.Ad.findAll();
}

async function findAdById(id){
  return await db.Ad.findByPk(id);
}

async function getAdsByType(type) {
  try {
    const ads = await db.Ad.findAll({
      where: {
        type: type,
        isActive: true
      },
      include: [
        {
          model: db.Media,
          as: 'medias'
        },
        {
          model: db.Interest,
          as: 'interests'
        }
      ]
    });
    return ads;
  } catch (err) {
    console.error('Erro ao buscar anúncios:', err);
    throw err;
  }
}

async function updateAd(id, data) {
  const [updatedRowsCount] = await db.Ad.update(data, {
    where: { id }
  });

  if (updatedRowsCount === 0) {
    throw new Error('O anúncio não pode ser encontrado!');
  }

  return await findAdById(id);
}

async function deleteAdById(id)
{
  return db.Ad.destroy({where: {id}});
}



module.exports = {
  findAllAds,
  findAdById,  
  getAdsByType,
  deleteAdById,
  updateAd,
};
