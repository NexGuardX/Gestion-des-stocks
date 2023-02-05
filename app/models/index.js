const Article = require("./article");
const Category = require("./category");


Category.hasMany(Article, {
    foreignKey: "category_id",
    as: "article"
  })

  Article.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category"
  })

module.exports = {
    Category,
    Article
}