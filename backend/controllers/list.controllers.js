const elements = require('../list.json');

exports.get = (req, res) => {

	const query = req.query.query ? req.query.query.toLowerCase() : null;
	
	let filtered = elements;
	
	if (query) {
		filtered = filtered.filter(element => element.name.toLowerCase().includes(query));
	}
	
	res.setHeader('Content-Type', 'application/json');
	res.send(filtered);
};