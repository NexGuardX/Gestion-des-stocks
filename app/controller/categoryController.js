
const { Category, Product } = require('../models');

module.exports = {
  //affichage de la page d'accueil
  async getAllCategory(request, response) {
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const categories = await Category.findAll({});

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('categories' ,{ categories })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async getOneCategory(request, response) {
    const categoryId = request.params.id;
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const category = await Category.findByPk(categoryId, {
        include: ["product"],
      });

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('category', { category })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async addCategory(req, res) {
    // on récupére le nom envoyé via le form
    const categoryName = req.body.name;
    try {
      // on crée le niveau (create -> build + save)
      await Category.create({ name: categoryName });
      // on redirige vers la liste des niveaux
      res.redirect('/category');
    } catch (err) {
      console.error(err);
      response.status(500).render('500');
    }
  },
};

