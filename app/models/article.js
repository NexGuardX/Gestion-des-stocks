
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Article extends Model { }

Article.init ({
    name : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    quantité : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
       
      
        sequelize,
        tableName: 'article'
        

});
module.exports = Article;