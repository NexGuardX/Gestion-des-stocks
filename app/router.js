const express = require('express');
const router = express.Router();
const alimentaireController = require("./controller/alimentaireController");
const listeController = require("./controller/listeController");
const babyController = require("./controller/babyController");
const entretienController = require("./controller/entretienController");

router.get('/', listeController.listPage);
router.get('/alimentaire', alimentaireController.getAllAliment);
router.get('/alimentaire/:id', alimentaireController.getOnearticle);
router.get('/baby', babyController.getAllArticle);
router.get('/baby/:id', babyController.getOneArticle);
router.get('/entretien', entretienController.getAllArticle);
router.get('/entretien/:id', entretienController.getOneArticle);





module.exports = router;