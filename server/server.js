/*
 * Main js file, gebruik deze alleen om de server op te starten.
 */
var http = require('http'),
	api = require('./apiRequest.js'),
	file = require('./fileRequest.js'),
	settings = require('./settings.js').getSettings();

init();

http.createServer( function ( req, res ) {

	if ( req.url.substring(1, 4) == 'api' ) {
		// Als request begint met "api", moet een json object terug worden gegeven.
		api.performRequest( req, res );
	} else {
		// Geen api-request, geef de file terug die wordt opgevraagd.
		file.performRequest( req, res );
	}

}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

function init() {
	// Check de trunk uit naar een tmp directory.
	require('./functions/checkout.js').execute(settings.svnTrunk, settings.svnTrunkTargetDir);
	require('./functions/update.js').execute(settings.svnTrunkTargetDir);
}
