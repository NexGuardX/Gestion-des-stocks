
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Product extends Model { }

Product.init ({
    name : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    quantity : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id : {
        type: DataTypes.INTEGER,
        
    }
}, {
       
      
        sequelize,
        tableName: 'product'
        

});
module.exports = Product;