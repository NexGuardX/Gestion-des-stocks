const express = require('express');
const router = express.Router();
const articleController = require("./controller/articleController");
const categoryController = require("./controller/categoryController");
const { error404 } = require('./middlewares/404');


router.get('/', articleController.getAllArticle);
router.get('/article/:id', articleController.getOnearticle);
router.get('/category', categoryController.getAllCategory);
router.get('/category/:id', categoryController.getOneCategory);

router.post('/article/:id', articleController.UpdateArticle);
//router.post('/alimentaire', alimentaireController.deletArticle);
router.post('/article', articleController.addArticle);
router.post('./article/:id', articleController.deletArticle);





module.exports = router;