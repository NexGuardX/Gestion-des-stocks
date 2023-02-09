const express = require('express');
const router = express.Router();
const productController = require("./controller/productController");
const categoryController = require("./controller/categoryController");
const { error404 } = require('./middlewares/404');


router.get('/', productController.getAllProduct);
router.get('/product/:id', productController.getOneProduct);
router.get('/category', categoryController.getAllCategory);
router.get('/category/:id', categoryController.getOneCategory);

router.post('/product/:id', productController.updateProduct);
//router.post('/alimentaire', alimentaireController.deletproduct);
router.post('/product/newproduct', productController.addProduct);
router.post('./product/:id', productController.deleteProduct);





module.exports = router;