
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Entretien extends Model { }

Entretien.init ({
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
        tableName: 'entretien'
        

});
module.exports = Entretien;