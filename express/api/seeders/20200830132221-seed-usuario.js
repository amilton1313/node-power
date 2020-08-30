'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {
         nome: 'Amilton José Rocha',
         username: 'amilton',
         scope_id: 1,
         created_at: new Date().toDateString(),
         updated_at: new Date().toDateString()
       }
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {})
  }
};
