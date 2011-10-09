var http = require('http');

/*
 * Haalt versie.txt op van een webserver
 */
exports.execute = function( request, response ) {

	console.log('getting versie.txt ...');

	var options = {
		host: 'www.anwb.nl',
		port: 80,
		path: '/static/versie.txt'
	};

	http.get(options, function(res) {
		res.on('data', function ( chunk ) {
			console.log('BODY: ' + chunk);
			response.end( chunk );
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});

}