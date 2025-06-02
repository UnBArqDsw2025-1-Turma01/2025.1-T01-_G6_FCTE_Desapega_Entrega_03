const adService = require('../services/ad.service');

class AdFacade
{
    async getAdsByType(type)
    {
        const existing_types = ['sale', 'donation', 'exchange'];

        if(!existing_types.includes(type))
        {
            console.log("Tipo de anúncio inexistente");
            return;
        }

        return await adService.getAdsByType(type);
    }

    async updateAd(id, body)
    {
        if(!id || !body || Object.keys(body).length === 0)
        {
            return;
        }

        return await adService.updateAd(id, body);
    }

    async deleteAdById(id)
    {
        return adService.deleteAdById(id);
    }
}

module.exports = new AdFacade();