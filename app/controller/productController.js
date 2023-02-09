
const { Product, Category } = require('../models');


module.exports = {
  //affichage de la page d'accueil
  async getAllProduct(request, response) {
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const products = await Product.findAll({});

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('products' ,{ products })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async getOneProduct(request, response) {
    const productId = request.params.id;
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const product = await Product.findByPk(productId, {
        include: ["category"],
      });

      
      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render('product', { product })
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async updateProduct(request, response) {
    const newQuantity = request.body.quantity;
    // on récupère, l'id du niveau dans l'url
    console.error(newQuantity);
    const productId = request.params.id;
    try {
      // on récupére l'aliment depuis la db.
      const product = await Product.findByPk(productId);
      // si pas d'aliment avec cet id -> 404
      if (!product) {
        return response.status(404).render('404');
      }
      product.quantity = newQuantity; 
      console.log('ici');
      await product.save(); 
      console.log('save ok');// sauvegarde le niveau modifié en db
      response.redirect('/product');
    } catch (err) {
      console.error(err);
      response.status(500).render('500');
    }
  },
  async addProduct(request, response) {
      
      const { name, quantity } = request.body;
      const categoryId = request.params.id;
      const category = request.body.id;
      console.log('ici');
      try {
        
        const newProduct = await Product.create({ name: name, quantity: quantity, 
          include:[category = category.name ]});
        
        console.log('save ok');
        response.redirect('/product');
      } catch (err) {
        console.error(err);
        response.status(500).render('500');
      }
    },
  
  async deleteProduct(request, response) {
    const productId = request.params.id;
    try {
      // on récupére le niveau depuis la db.
      const product = await Product.findByPk(productId);
      // si pas de niveau avec cet id -> 404
      if (!product) {
        return response.status(404).render('404');
      }
      // on efface le niveau de db
      await product.destroy();
      console.log('delete ok');
      // on redirige vers la liste des niveaux
      response.redirect('/product')
    } catch (err) {
      console.error(err);
      response.status(500).render('500');
    }
   
  }
};

