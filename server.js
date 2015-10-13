var express = require('express');
var app = express();

// app.get('/', function (req, res){
// 	res.send("Hola mundo desde server.js")
// });

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',function(req,res){
	console.log("recibí un get")

		person1 = {
		name: 'Tim',
		email: 'tim@email.com',
		number: '555555555'
	};

	person2 = {
		name: 'Emily',
		email: 'emi@pami.org',
		number: '123123123'
	};

	person3 = {
		name: 'Rod',
		email: 'rod@mail.com',
		number: '333333333'
	};

	var contactlist = [person1,person2,person3];
	res.json(contactlist);
});

app.listen(3000);
console.log("server corriendo en puerto 3000")