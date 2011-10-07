var http = require('http');
var api = require('./apiRequest.js');
var file = require('./fileRequest.js');

http.createServer( function ( req, res ) {

	if ( false ) {
		// Als request begint met "api", moet een json object terug worden gegeven.
		api.performRequest( req, res );
	} else {
		//Geen api-request, geef de file terug die wordt opgevraagd.
		file.performRequest( req, res );
	}

}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
