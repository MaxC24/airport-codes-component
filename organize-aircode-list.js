var aircodes = require('./airport-codes');

var arrOfNamesAndCodes = aircodes.split('\n')
.filter(function(line){
	var parReg = /[\(\)]/;
	return parReg.test(line);
})
.map(function(line) {
	return convertLine(line);
});

function convertLine(line) {
	line = line.replace(/[\(\)]/g, '');
	var dividedLine = line.split(',');
	console.log(dividedLine) 
	var city = dividedLine[0];
	var stateAndAircode = dividedLine[1].trim().split(' ');
	var state = stateAndAircode[0];
	var aircode = stateAndAircode[1]
	return {
		city: city,
		state: state,
		aircode: aircode
	};
};


console.log(arrOfNamesAndCodes);