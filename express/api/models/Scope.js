'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scope extends Model {

    static associate(models) {
      // define association here
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