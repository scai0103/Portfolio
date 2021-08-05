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
      name: "Sen Cai"
  });
})

app.get('/about', function (req, res) {
    res.send('Hello World from About');
  })
 
app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})