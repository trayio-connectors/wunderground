var Falafel = require('@trayio/falafel');

var apptalk = new Falafel().wrap({
	directory: __dirname+'/'
});

exports.apptalk = apptalk;
