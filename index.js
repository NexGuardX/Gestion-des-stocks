

//const path = require('path');
const express = require('express');
//const router = require('./app/router');
const session = require('express-session');
//const bodyParser = require('body-parser');
const alimentaires = require('./data/alimentaires.json');

//Middlewareapp.use(express.json());
const port = 4000;

const app = express();


app.set('view engine', 'ejs');
app.set('views', './app/views');

//app.use(express.static(path.join(__dirname, './public')));
//app.use(express.urlencoded({ extended: true }));

/*app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(router);
*/

app.get('/alimentaire', (req,res) => {    
  res.render('alimentaire', {alimentaires})});

app.post('/alimentaire', (req,res) => { 
  alimentaires.push(req.body)
  res.status(200).json(parkings) 

});
 app.put('/alimentaire/:id', (req,res) => {
  const id = parseInt(req.params.id)
  let alimentaire = alimentaires.find(alimentaire => alimentaire.id === id)
    alimentaire.article =req.body.article,
    alimentaire.quantité =req.body.quantité,
    alimentaire.catégorie =req.body.catégorie,
    res.status(200).json(parking)});

app.get('/alimentaire/:id', (req,res) => {    
  const id = parseInt(req.params.id)    
  const alimentaire = alimentaires.find(alimentaire => alimentaire.id === id)    
  res.status(200).json(alimentaire)})




app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});