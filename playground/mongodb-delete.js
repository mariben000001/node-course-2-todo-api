//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
	return console.log('unable to connect db');
	}
	console.log('connected to mongodb server');
	
	/*deleteMany
	db.collection('Users').deleteMany({name: 'Mariben'}).then ((result) => {
		console.log(result);
	});*/
	
	/*deleteOne
	db.collection('Todos').deleteOne({text: 'Eat lunch'}).then ((result) => {
	console.log(result);
	});*/
	
	//findOneAndDelete
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5bc055168d47c4f75405d5c7')
	}).then((result) => {
	console.log(result);
	});
	
	//db.close();
	});

