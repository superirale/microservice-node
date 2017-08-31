const Person = require("../models/person.js");

exports.person_create = (req, res) => {

	const person = new Person(req.body);
	person.save( (err) => {
		if (err)
	   		return res.status(404).send('Resource not found!');

		res.send(person);
	});
}

exports.person_get = (req, res) => {
	Person.findOne({ _id: req.params.id}, '', (err, person) => {
		if (err)
	   		return res.status(404).send('Resource not found!');
		res.send(person);
	});
}
exports.person_list = (req, res) => {

	Person.find({}, '', (err, people) => {
		if (err)
	   		return res.status(404).send('Resource not found!');
		res.send(people);
	});
}

exports.person_update = (req, res) => {

	Person.findByIdAndUpdate(req.params.id, req.body, (err, person) => {
		if(err)
	   		return res.status(404).send('Resource not found!');
	    res.send(person);
	});
}

exports.person_delete = (req, res) => {

	Person.findByIdAndRemove(req.params.id, (err) => {
		if(err)
	   		return res.status(404).send('Resource not found!');
		res.send({message: 'person deleted!'})
	});
}