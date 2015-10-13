var express = require('express');
var app = express();

// app.get('/', function (req, res){
// 	res.send("Hola mundo desde server.js")
// });

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("server corriendo en puerto 3000")