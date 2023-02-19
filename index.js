// l'option override indique que les variables chargées depuis le fichier .env
// doivent remplacer celles qui pourraient déjà être définies ailleurs.

const { PrismaClient } = require('@prisma/client');

require('dotenv').config({ override: true });

const path = require('path');
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');

const router = require('./app/router');

const port = process.env.PORT || 4000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});
