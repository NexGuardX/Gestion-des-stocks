const emailValidator = require('email-validator'); // validation des email
const bcrypt = require('bcrypt'); // hash des mots de passe
const User = require('../models/user');

module.exports = {
  // page d'inscription
  signupPage(request, response) {
    response.render('signup');
  },
  // soumission du form d'inscription
  async handleSignup(request, response) {
    // on récupère sous forme de variables les différentes valeurs reçues
    const { firstname, lastname, email, password, confirmation } = request.body;
    try {
      // on vérifie que tous les champs obligatoires sont renseignés
      if (!email || !password || !confirmation) {
        return response.render('signup', { errorMessage: 'Veuillez remplir tous les champs requis.' })
      }

      // on vérifie que les 2 mots de passe sont les mêmes
      if (password !== confirmation) {
        return response.render('signup', { errorMessage: 'Le mot de passe et sa confirmation ne correspondent pas.' })
      }

      // il pourrait être interessant de vérifier que le mot de passe
      // répond bien aux recommandations de la CNIL... longueur, majuscules et minuscules etc..

      // on vérifie que l'email est correct... comme c'est finalement assez compliqué de
      // valider une adresse email...on laisse un module npm (email-validator) faire le job.
      if (!emailValidator.validate(email)) {
        return response.render('signup', { errorMessage: 'Cet email n\'est pas valide.' })
      }

      // on vérifie que cet email n'est pas déjà utilisé par un autre utilisateur
      // on essaie de récupèrer un utilisateur avec cet email
      const userWithSameEmail = await User.findOne({ where: { email } });
      // si on a récupérer un utilisateur c'est que l'adresse est déjà utilisée
      if (userWithSameEmail) {
        return response.render('signup', { errorMessage: 'Cet email est déjà utilisé.' })
      }

      // génération du hash du mot de passe
      const encryptedPassword = await bcrypt.hash(password, 10);

      // Créer et sauvegarder dans la db le nouvel utilisateur
      await User.create({ firstname, lastname, email, password: encryptedPassword })
      // on redirige vers le form de connexion
      response.redirect('/login');

    } catch (err) {
      console.error(err);
      response.status(500).render('500');
    }
  },

  // page de connexion
  loginPage(request, response) {
    response.render('login');
  },

  // soumission du form de connexion
  async handleLogin(request, response) {
    // on récupère les données du formulaire
    const { email, password } = request.body;
    try {
      // on essaie de récupérer un utilisateur avec cet emal
      const user = await User.findOne({ where: { email } });

      // s'il n'y en a pas je renvoie une erreur
      if (!user) {
        return response.render('login', { errorMessage: "Email ou mot de passe incorrect" })
      }

      // sinon je vérifie que le mot de passe et le hash correspondent
      const hasMatchingPassword = await bcrypt.compare(password, user.password);
      if (!hasMatchingPassword) {
        return response.render('login', { errorMessage: "Email ou mot de passe incorrect" })
      }

      // si l'email et le hash sont corrects, je connecte l'utilisateur
      // coté serveur, cette connexion se matérialise par la présence d'une propriété user
      // dans la session de ce client...
      request.session.user = user;

      // direction la page d'accueil
      response.redirect('/');
    } catch (err) {
      console.error(err);
      response.status(500).render('500');
    }
  },

  logout(request, response) {
    if (request.session.user) {
      delete request.session.user
    }
    response.redirect('/');
  },

  profilePage(request, response) {
    response.render('profile');
  }

}