'use strict';

const fs = require('fs');

fs.readFile('./info.json', 'utf8', (err, data) => {
	if(err) {
		console.log(err);
		return;
	}

	console.log('\x1b[5m************ \x1b[0m');
	console.log(data);
	console.log('\x1b[5m*Contact Me* \x1b[0m');
});
