'use strict';
const { Model } = require('sequelize');
const CryptoJS = require('crypto-js')
const constants = require('../../constants')

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {

    static associate(models) {
      Usuario.belongsTo(models.Scope, {
        foreignKey: 'scope_id'
      })
    }

    static gerarHash(senha) {
      console.log('senha', senha)
      return CryptoJS.HmacSHA1(senha, constants.PASSWORD_TOKEN)
        .toString(CryptoJS.enc.Hex)
    }
  };
  Usuario.init({
    nome: DataTypes.STRING,
    username: DataTypes.STRING,
    scope_id: DataTypes.INTEGER,
    senha: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'usuarios',
    modelName: 'Usuario',
  });

  Usuario.beforeSave((usuario, options) => {
    console.log('aqui', usuario)
    if (usuario.senha) {
      usuario.senha = Usuario.gerarHash(usuario.senha)
    }
  })


  return Usuario;
};