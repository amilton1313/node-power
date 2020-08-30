'use strict';
// const config = require('../config/database')[env];

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scope extends Model {

    static associate(models) {
      Scope.hasMany(models.Usuario, {
        foreignKey: 'scope_id'
      })
    }
  };
  Scope.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Scope',
  });
  return Scope;
};