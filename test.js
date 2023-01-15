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