// import express from 'express';
// import handlebars from 'express-handlebars';

const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const PORT = 8080;

app.use(express.json());


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  let user = {
    name: 'Valentin',
    lastName: 'Cadel'
  }

  res.render('index', user)
})


app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
})