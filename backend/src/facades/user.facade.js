const userService = require('../services/user.service');

class UserFacade
{
    async updateUser(params, body)
    {
        try
        {
            // const { id } = req.params;
            // const update_user_params = req.body;

            const { id } = params;
            const update_user_params = body;

            if (!id) 
            {
                console.log("Por favor, forneça um ID");
                return;
                // return res.status(400).send({ message: 'Por favor, forneça um ID.' });
            }
        
            if (!update_user_params || Object.keys(update_user_params).length === 0) 
            {
                console.log("Nenhum dado para atualizar foi fornecido.");
                return; 
                // return res.status(400).send({ message: 'Nenhum dado para atualizar foi fornecido.' });
            }
    
            return await userService.updateUserById(id, update_user_params);
        
        
        }
        catch (err)
        {
            console.error(err);
            return err; 
            //res.status(500).send({ message: 'Erro ao atualizar usuário.', error: err.message });
        }
    }
}

module.exports = new UserFacade();