const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database')

class User extends Model { }

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  role: DataTypes.TEXT,
  firstname: DataTypes.TEXT,
  lastname: DataTypes.TEXT
}, {
  sequelize,
  tableName: 'user'
});

module.exports = User;