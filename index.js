const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const fs = require('fs')


app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));


  const readingData = JSON.parse(fs.readFileSync('characters.json'))
  const aliveStatus = readingData.filter((reading) => reading.status === 'Alive')
  const orderReading = aliveStatus.sort((a,b) => {
    if (a.name < b.name) return -1;
    if(a.name > b.name) return 1;
  })


  app.use(express.json())
  
  app.use(express.static('public'))
  
  app.get('/', function (req, res) {
   
    res.render('home', {
      reading: orderReading,})
  }




  )
  


  app.listen (5000)