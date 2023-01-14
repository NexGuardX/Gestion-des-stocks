
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Hygiène extends Model { }

Hygiène.init ({
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
        tableName: 'hygiène'
        

});
module.exports = Hygiène;