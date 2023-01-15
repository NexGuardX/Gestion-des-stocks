/*const Alimentaire = require('../app/models/v1/alimentaire');


const client = require('../database');

module.exports = {
async getAllAlimentaire(){
    try{
      const sql = `SELECT * FROM "alimentaire"`;
      const results = await client.query(sql);
      if(!results.rowCount){
        return null
      }
    } catch(err){
        console.log(err)
      }
    
    return results.rows;}

}
*/