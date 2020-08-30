'use strict';

const { Usuario } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('sim')
    await Usuario.update({
      nome: 'Amilton José Rocha',
      senha: 'aaaammmmm'
    }, {
      where: {id: 1}
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
