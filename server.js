var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

// app.get('/', function (req, res){
// 	res.send("Hola mundo desde server.js")
// });

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist',function(req,res){
	console.log("recibí un get")
	db.contactlist.find(function (err, docs){
		console.log(docs);
		res.json(docs);
	});
	// 	person1 = {
	// 	name: 'Tim',
	// 	email: 'tim@email.com',
	// 	number: '555555555'
	// };

	// person2 = {
	// 	name: 'Emily',
	// 	email: 'emi@pami.org',
	// 	number: '123123123'
	// };

	// person3 = {
	// 	name: 'Rod',
	// 	email: 'rod@mail.com',
	// 	number: '333333333'
	// };

	// var contactlist = [person1,person2,person3];
	// res.json(contactlist);
});

app.post('/contactlist', function(req, res){
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/contactlist/:id', function(req, res){
	var id = req.params.id; //Tomo el valor de la id desde la URL
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	})
});

app.get('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	});
});

app.put('/contactlist/:id', function(req, res){
	var id =req.params.id;
	console.log(req.body.name); //modifica un poco para traer el nombre y no el id
	db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
		new: true}, function (err, doc) {
			res.json(doc);	
	});
});

app.listen(3000);
console.log("server corriendo en puerto 3000")