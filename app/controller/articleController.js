
const { Article, Category } = require('../models');

module.exports = {
  //affichage de la page d'accueil
  async getAllArticle(req, res) {
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const articles = await Article.findAll({});

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      res.render('articles' ,{ articles })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async getOnearticle(request, response) {
    const articleId = request.params.id;
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const article = await Article.findByPk(articleId, {
        include: ["category"],
      });

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('article', { article })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async UpdateArticle(request, response) {
    const newQuantity = request.body.quantité;
    // on récupère, l'id du niveau dans l'url
    console.error(newQuantity);
    const articleId = request.params.id;
    try {
      // on récupére l'aliment depuis la db.
      const article = await Article.findByPk(articleId);
      // si pas d'aliment avec cet id -> 404
      if (!article) {
        return response.status(404).render('404');
      }
      article.quantité = newQuantity; 
      console.log('ici');
      await article.save(); 
      console.log('save ok');// sauvegarde le niveau modifié en db
      response.redirect('/article');
    } catch (err) {
      console.error(err);
      response.status(500).render('500');
    }
  },
  async addArticle(request, response) {
      // on récupére le nom envoyé via le form
      const { name, quantité, category } = request.body;
      console.log('ici');
      try {
        // on crée le niveau (create -> build + save)
        const newArticle = await Article.create({ name: articleName, quantité: articleQuantité, category: articleCategory });
        // on redirige vers la liste des niveaux
        response.redirect('/articles');
      } catch (err) {
        console.error(err);
        response.status(500).render('500');
      }
    },
  
  async deletArticle(req, res) {
    
    try {
      const deleArticle = await Article.destroy({ where: { id: req.params.id } })
      res.redirect("/alimenataire");
    } catch(err) {
      console.error(err);
      response.status(500).send("Erreur lors de la suppression de l'article")
    }
  }
};

