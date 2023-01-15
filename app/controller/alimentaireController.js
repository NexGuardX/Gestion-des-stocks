
const { Alimentaire } = require('../models/alimentaire');

module.exports = {
  //affichage de la page d'accueil
  async homePage(request, response) {
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const alimentaires = await Alimentaire.findByPk(1,{});
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('home', { alimentaires })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
};