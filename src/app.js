const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('This is the Main Page');
})

app.get('/about', function (req, res) {
    res.send('Hello World from About');
  })
 
app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})