//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
	return console.log('unable to connect db');
	}
	console.log('connected to mongodb server');
	
	db.collection('Users').findOneAndUpdate({
	_id: new ObjectID('5bc0558d24021527d9100ea8')
	}, {
		$set: {
		name: "Mariben"
		}, 
		$inc: {
		"age": 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	//db.close();
	});

