//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
	return console.log('unable to connect db');
	}
	console.log('connected to mongodb server');

	/*
db.collection('Todos').find().count().then((count) => {
console.log(`Todos count: ${count}`);
}, (err) => {
	console.log('Unable to fetch todos', err);
});
	//db.close();
*/
db.collection('Users').find({name: 'Mariben'}).toArray().then((docs) => {
console.log(JSON.stringify(docs, undefined, 2));
	});
	});

