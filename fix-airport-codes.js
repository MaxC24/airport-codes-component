const fs = require('fs');

let airCodes = fs.readFileSync('./airport-codes.js', 'utf8');

const arrOfCitiesAndCodes = airCodes.split('\n')
.filter(line => /[\(\)]/.test(line))
.map(line => convertLine(line));

function convertLine(line) {
	let city = line.match(/[A-Za-z\s]+/)[0].toLowerCase();
	let aircode = line.match(/\((.+)\)/)[1];
	return { city, aircode }
};

fs.writeFileSync('./organized-airport-codes.json', JSON.stringify(arrOfCitiesAndCodes));