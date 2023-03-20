import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const productController = {
  // affichage de la page d'accueil
  async getAllProduct(request, response) {
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const products = await prisma.product.findMany({});

      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render("products", { products });
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async getOneProduct(request, response) {
    const { id } = request.params;
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const product = await prisma.product.findUniqueOrThrow({
        where: { id: Number(id) },
        include: {
          category: true,
        },
      });

      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.json({ product });
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  async updateProduct(request, response) {
    const { id } = request.params;
    const { quantity } = request.body;
    // on récupère, l'id du niveau dans l'url

    try {
      // on récupére l'aliment depuis la db.
      const product = await prisma.product.update({
        where: { id: Number(id) },
        data: { quantity: Number(quantity) },
      });
      // si pas d'aliment avec cet id -> 404

      console.log("save ok"); // sauvegarde le niveau modifié en db
      response.json({ product });
    } catch (err) {
      console.error(err);
      response.status(500).render("500");
    }
  },
  async addProduct(request, response) {
    // eslint-disable-next-line camelcase
    const { name, quantity, category_id } = request.body;

    console.log("ici");
    try {
      const newProduct = await prisma.product.create({
        data: {
          name,
          quantity,
          // eslint-disable-next-line camelcase
          category: { connect: { id: category_id } },
        },
      });
      console.log("save ok");
      response.json({ newProduct });
    } catch (err) {
      console.error(err);
      response.status(500).render("500");
    }
  },

  // eslint-disable-next-line consistent-return
  async deleteProduct(request, response) {
    const { id } = request.params;
    try {
      // on récupére le niveau depuis la db.
      const product = await prisma.product.delete({
        where: { id: Number(id) },
      });
      // si pas de niveau avec cet id -> 404
      if (!product) {
        return response.status(404).render("404");
      }
      // on efface le niveau de db

      console.log("delete ok");
      // on redirige vers la liste des niveaux
      response.json({ product });
    } catch (err) {
      console.error(err);
      response.status(500).render("500");
    }
  },
};

export default productController;
