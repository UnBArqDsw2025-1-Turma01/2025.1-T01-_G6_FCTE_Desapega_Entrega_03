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
                console.log("Falha: ID não fornecido para atualização.");
                return { success: false, message: "ID ausente" };
                // return res.status(400).send({ message: 'Falha: ID não fornecido para atualização.' });
            }
        
            if (!update_user_params || Object.keys(update_user_params).length === 0) 
            {
                console.log("Nenhum dado para atualizar foi fornecido.");
                return { success: false, message: "Corpo vazio" };  
                // return res.status(400).send({ message: 'Nenhum dado para atualizar foi fornecido.' });
            }
            
            console.log(`Atualizando usuário ${id} com dados:`, update_user_params);

            const result = await userService.updateUserById(id, update_user_params);
            return { success: true, data: result };
        
        }
        catch (err)
        {
            console.error("Erro inesperado:", err);
            return { success: false, error: err.message };
            //res.status(500).send({ message: 'Erro ao atualizar usuário.', error: err.message });
        }
    }
}

module.exports = new UserFacade()