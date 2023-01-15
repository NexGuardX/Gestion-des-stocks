
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Alimentaire extends Model { }

Alimentaire.init ({
    article : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    quantité : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    catégorie : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
       
      
        sequelize,
        tableName: 'alimentaire'
        

});
module.exports = Alimentaire;