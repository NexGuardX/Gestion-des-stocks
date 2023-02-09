const Product = require("./product");
const Category = require("./category");


Category.hasMany(Product, {
    foreignKey: "category_id",
    as: "products"
  })

  Product.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category"
  })

module.exports = {
    Category,
    Product
}