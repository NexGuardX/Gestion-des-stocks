import { PrismaClient } from "@prisma/client";
//const bodyParser = require("body-parser");

const prisma = new PrismaClient();

const categoryController = {
  //affichage de la page d'accueil
  getAll: async function (request, response) {
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const categories = await prisma.category.findMany({});

      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.render("categories", { categories });
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  get: async function (request, response) {
    const { id } = request.params;
    try {
      // on récupére les quiz avec mes associations 'author' et 'tags'
      const category = await prisma.category.findUniqueOrThrow({
        where: { id: Number(id) },
      });

      // on renvoie le rendu de la home à laquelle on passe le tableau des quiz
      response.json({ category });
    } catch (err) {
      console.error(err);
      response.status(500).send(err);
    }
  },
  // eslint-disable-next-line consistent-return
  createCategory: async function (request, response) {
    // on récupére le nom envoyé via le form
    console.log("test");
    const { name } = request.body;
    console.log("ici");
    try {
      // on crée le niveau (create -> build + save)
      const category = await prisma.category.create({
        data: {
          name,
        },
      });
      // on redirige vers la liste des niveaux
      console.log("c bon");
      response.render(category);
    } catch (err) {
      return response.status(500).json(err);
    }
  },
  // eslint-disable-next-line consistent-return
  deleteCategory: async function (request, response) {
    const { id } = request.params;
    try {
      const deleteCat = await prisma.category.delete({
        where: {
          id: Number(id),
        },
      });
      console.log("c bon");
      response.json(deleteCat);
    } catch (err) {
      return response.status(500).json(err);
    }
  },
};
export default categoryController;
