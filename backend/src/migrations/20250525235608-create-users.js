'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type:     Sequelize.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
        primaryKey: true,
      },
      name:       { type: Sequelize.STRING, allowNull: false },
      email:      { type: Sequelize.STRING, allowNull: false, unique: true },
      password:   { type: Sequelize.STRING, allowNull: false },
      phone:      { type: Sequelize.STRING, allowNull: false },
      role:       { type: Sequelize.STRING, allowNull: false, defaultValue: 'user' },
      createdAt:  { type: Sequelize.DATE,   defaultValue: Sequelize.NOW },
      updatedAt:  { type: Sequelize.DATE,   defaultValue: Sequelize.NOW },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
