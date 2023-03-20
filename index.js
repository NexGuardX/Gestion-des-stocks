// l'option override indique que les variables chargées depuis le fichier .env
// doivent remplacer celles qui pourraient déjà être définies ailleurs.

//import { PrismaClient } from "@prisma/client";

import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
//const bodyParser = require("body-parser");

import router from "./app/router.js";

const port = process.env.PORT || 4000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});
