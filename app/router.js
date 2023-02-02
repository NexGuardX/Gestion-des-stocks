const express = require('express');
const router = express.Router();
const alimentaireController = require("./controller/alimentaireController");
const listeController = require("./controller/listeController");

router.get('/', listeController.listPage);
router.get('/alimentaire', alimentaireController.getAllAliment);
router.get('/alimentaire/:id', alimentaireController.getOnearticle);






module.exports = router;