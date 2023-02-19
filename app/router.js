const express = require('express');

const router = express.Router();
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const productController = require('./controller/productController');
const categoryController = require('./controller/categoryController');
const { error404 } = require('./middlewares/404');

router.get('/', productController.getAllProduct);
router.get('/product/:id', productController.getOneProduct);
router.get('/category', categoryController.getAllCategory);
router.get('/category/:id', categoryController.getOneCategory);

router.post('/product/:id', productController.updateProduct);
router.post('/product', productController.addProduct);
router.post('/product/:id', productController.deleteProduct);
router.post('/category', categoryController.createCategory);
router.delete('/category/:id', categoryController.deleteCategory);
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;
