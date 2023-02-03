
const Entretien = require('../models/entretien');

module.exports = {
  //affichage de la page d'accueil
  async getAllArticle(request, response) {
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const entretiens = await Entretien.findAll({});

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('entretien' ,{ entretiens })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async getOneArticle(request, response) {
    const articleId = request.params.id;
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const entretiens = await Entretien.findByPk(articleId);

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('entretien', { entretiens })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
};

