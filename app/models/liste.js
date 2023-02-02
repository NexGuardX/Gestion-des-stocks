const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Liste extends Model { }

Liste.init ({
    alimentaire_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bébé_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    entretien_nettoyage_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hygiène : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {

    sequelize,
    tableName: 'liste'
}

);
module.exports = Liste;