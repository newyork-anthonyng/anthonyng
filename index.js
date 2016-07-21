'use strict';

const fs = require('fs');

fs.readFile('./info.json', 'utf8', (err, data) => {
	if(err) {
		console.log(err);
		return;
	}

	console.log(data);
});
