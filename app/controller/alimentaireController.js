
const Alimentaire = require('../models/alimentaire.js');

module.exports = {
  //affichage de la page d'accueil
  async getAllAliment(request, response) {
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const alimentaires = await Alimentaire.findAll({});

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('home' ,{ alimentaires })
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
};