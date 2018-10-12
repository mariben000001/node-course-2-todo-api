//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name: 'mariben', age: 25}; //destructuring
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
	return console.log('unable to connect db');
	}
	console.log('connected to mongodb server');

	
	
/*	
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if (err) {
		return console.log('Unable to insert todo', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	
	db.close(); //closes connection
	
	
	db.collection('Users').insertOne({
	//	_id: 123,
		name: 'Mariben',
		age: 25,
		location: 'Anabu 2-B'
	}, (err, result) => {
		if (err){
			return console.log('Unable to insert todo',err);
		}
		console.log(result.ops[0]._id.getTimestamp()); //array of all docx that got inserted
	});
*/
	});

