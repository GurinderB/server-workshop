'use strict';
//Dependencies
const express = require('express');
const app = express();

// allows us to serve static files - like html
app.use(express.static('./public'));

console.log ('absolute path', `${__dirname}`)
app.get('/home', function (req, res) {
	res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/test', function (req, res) {
	res.status(200).send('msg from the server');
});

app.get('/json', function (req, res) {
	let course = {
		date: Date.now(),
		title: 'Code 301',
		instructor: 'Guru',
		studentCount: 20,
	}
	console.log('I did something');
	res.status(200).json(course);
})


app.listen(3000, function () {
	console.log('listning on port 3000');
});
