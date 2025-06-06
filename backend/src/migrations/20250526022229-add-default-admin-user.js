'use strict';

const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const passwordHash = await bcrypt.hash('suasenhadoadmin', 10);

    await queryInterface.bulkInsert('Users', [{
      id:         uuidv4(),
      name:       'Admin',
      email:      'admin@unb.br',
      password:   passwordHash,
      phone: '+55 11 91234-5678',
      role: 'admin',
      createdAt:  new Date(),    
      updatedAt:  new Date()    
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {
      email: 'admin@unb.br'
    }, {});
  }
};
