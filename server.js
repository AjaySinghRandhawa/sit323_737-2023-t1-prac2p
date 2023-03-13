var express = require("express")
var app = express()

app.get("/", function (req,res,)  // get method 
{
    res.send("hello world!") // respond with this text
})

//Simple request time logger for a specific route
app.use('/', (req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
  });

app.listen(3000, () =>{
  console.log('server is listening on port 3000')


}) //web server will listen to this particular port number