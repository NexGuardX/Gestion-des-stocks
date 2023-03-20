require('dotenv').config({ override: true });
const { Alimentaire } = require('./app/models/alimentaire');


 function getallAlimentaire() {
    const alimentaires =  Alimentaire.findByPk(1, {
      
    });
    // on utilise JSON.stringify pour améliorzr l'affichage des résultats
    // dans la console
    console.log(JSON.stringify(alimentaires))
  };

  getallAlimentaire();


  <% for (const category of locals.products){ %>
    <% }; %>

  

    INSERT INTO
    "product_has_category"("product_id", "category_id")
VALUES (29, 49), (30, 49), (31, 53), (32, 58), (33, 56), (34, 57), (35, 59);