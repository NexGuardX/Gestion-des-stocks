import express from "express";

const router = express.Router();
// eslint-disable-next-line import/no-extraneous-dependencies
//const bodyParser = require("body-parser");
import productController from "./controller/productController.js";
import categoryController from "./controller/categoryController.js";
//const { error404 } = require("./middlewares/404");

router.get("/", productController.getAllProduct);
router.get("/product/:id", productController.getOneProduct);
router.get("/category", categoryController.getAll);
router.get("/category/:id", categoryController.get);

router.post("/product/:id", productController.updateProduct);
router.post("/product", productController.addProduct);
router.post("/product/:id", productController.deleteProduct);
router.post("/category", categoryController.createCategory);
router.delete("/category/:id", categoryController.deleteCategory);
router.delete("/product/:id", productController.deleteProduct);

export default router;
