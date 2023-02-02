// l'option override indique que les variables chargées depuis le fichier .env
// doivent remplacer celles qui pourraient déjà être définies ailleurs.

require('dotenv').config({ override: true });

const path = require('path');
const express = require('express');
const router = require('./app/router');



const port = process.env.PORT || 4000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');




app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});