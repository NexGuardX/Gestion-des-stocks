
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Bébé extends Model { }

Bébé.init ({
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
        tableName: 'bébé'
        

});
module.exports = Bébé;