

const Alimentaire = require('../models/alimentaire.js');

module.exports = {
  //affichage de la page d'accueil
  async getAllAliment(req, res) {
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const alimentaires = await Alimentaire.findAll({});

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      res.render('alimentaire' ,{ alimentaires })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async getOnearticle(request, response) {
    const articleId = request.params.id;
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const alimentaires = await Alimentaire.findByPk(articleId);

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('alimentaire', { alimentaires })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async UpdateArticle(request, response) {
    const newQuantity = request.body.quantité;
    // on récupère, l'id du niveau dans l'url
    const articleId = request.params.id;
    try {
      // on récupére l'aliment depuis la db.
      const alimentaire = await Alimentaire.findByPk(articleId);
      // si pas d'aliment avec cet id -> 404
      if (!alimentaire) {
        return response.status(404).render('404');
      }
      alimentaire.quantité = newQuantity; // modifie le nom du niveau
      await Alimentaire.save(newQuantity); // sauvegarde le niveau modifié en db
      response.redirect('/alimentaire');
    } catch (err) {
      console.error(err);
      response.status(500).render('500');
    }
  },
  async addArticle(req, res) {
      // on récupére le nom envoyé via le form
      const articleName = req.body.article;
      try {
        // on crée le niveau (create -> build + save)
        await Alimentaire.create({ article: alimentaireArticle, quantité: alimentaireQuantité });
        // on redirige vers la liste des niveaux
        res.redirect('/alimentaire');
      } catch (err) {
        console.error(err);
        response.status(500).render('500');
      }
    },
  
  async deletArticle(req, res) {
    
    try {
      const deleArticle = await Alimentaire.destroy({ where: { id: req.params.id } })
      res.redirect("/alimenataire");
    } catch(err) {
      console.error(err);
      response.status(500).send("Erreur lors de la suppression de l'article")
    }
  }
};