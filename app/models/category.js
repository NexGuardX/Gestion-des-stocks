
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Category extends Model { }

Category.init ({
    name : {
        type: DataTypes.TEXT,
        allowNull: false
    },
   
}, {
       
      
        sequelize,
        tableName: 'category'
        

});
module.exports = Category;