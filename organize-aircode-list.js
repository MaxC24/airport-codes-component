var aircodes = require('./airport-codes');

var arrOfCitiesAndCodes = aircodes.split('\n')
.filter(function(line){
	var parReg = /[\(\)]/;
	return parReg.test(line);
})
.map(function(line) {
	return convertLine(line);
});

function convertLine(line) {
	var city = line.match(/[A-Za-z\s]+/)[0];
	var aircode = line.match(/\((.+)\)/)[1];
	return {
		city: city,
		aircode: aircode
	};
};


module.exports = arrOfCitiesAndCodes;