const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('App running on port %s', port);
});

app.get('/query', (req, res) => {
	res.json([
	{
		id: 123,
		name: 'Dell 3500',
		price: 60000
	},
	{
		id: 124,
		name: 'Dell 8500',
		price: 70000
	}

	]);
});