
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Baby extends Model { }

Baby.init ({
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
module.exports = Baby;