const path = require('path')
const express = require('express');
const { homedir } = require('os');
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index', {
      title: "Home",
      name: "Sen Cai",
      introduction: "My name is Sen Cai, a software engineer and web designer. " +
      "I have designed and improved MTA management system web client User Interface " +
      "and built Passenager audio delivery system prototype for Staten Island Railroad"
  });
})

app.get('/about', function (req, res) {
    res.send('Hello World from About');
  })
 
app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})