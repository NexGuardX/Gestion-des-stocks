
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class  Utilisateur extends Model { }

Utilisateur.init ({
    name : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    role : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
       
      
        sequelize,
        tableName: 'utilusateur'
        

});
module.exports = Utilisateur;