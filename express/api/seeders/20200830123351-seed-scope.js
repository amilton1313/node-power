'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('scopes', [
      {
          nome: 'Admin',
          created_at: new Date().toDateString(),
          updated_at: new Date().toDateString()
       },
       {
        nome: 'User',
        created_at: new Date().toDateString(),
        updated_at: new Date().toDateString()
     },
     {
      nome: 'Guest',
      created_at: new Date().toDateString(),
      updated_at: new Date().toDateString()
   }
      
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('scopes', null, {})
  }
};
