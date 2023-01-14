const { Sequelize } = require('sequelize');

// je crée une nouvelle occurence de la classe Sequelize en lui transmettant l'url de connexion
// et un objet d'options (ici on change simplement le nom des champs automatiques createdAt/updatedAt)
const sequelize = new Sequelize(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}`, {
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})
// Pour tester si la connexion à la DB fonctionne
// async function testDb(){
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// testDb();

module.exports = sequelize;