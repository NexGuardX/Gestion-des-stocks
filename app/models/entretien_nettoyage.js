
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Entretien_Nettoyage extends Model { }

Entretien_Nettoyage.init ({
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
        tableName: 'entretien_Nettoyage'
        

});
module.exports = Entretien_Nettoyage;