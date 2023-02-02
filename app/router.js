const express = require('express');
const router = express.Router();
const alimentaireController = require("./controller/alimentaireController");



router.get('/', alimentaireController.homePage);






module.exports = router;