'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'usuarios',
      'senha',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      }

    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'usuarios',
      'senha'
    )
  }
};
