
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}`, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

async function testDb(){
  
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}
testDb();
module.exports = sequelize;