'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Merchant.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    avg_rating: DataTypes.FLOAT,
    is_currently_promo: DataTypes.BOOLEAN,
    distance: DataTypes.FLOAT,
    thumbnail_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Merchant',
  });
  return Merchant;
};