var url = require('url');

exports.performRequest = function( req, res ) {
	// req moet action als parameter hebben.
	// Action mapped op api functie.
	var parsedUrl = url.parse( req.url );
	params = getParameters( parsedUrl );
	console.log( 'params: ', params );

	if ( params == null ) {
		console.log('return');
		return;
	}


/*
 * Moet nog VEEEEL netter opgezet worden. Maar POC werkt! 
 */
	if ( params.action === 'getBranches' ) {

		require('./commandlineWrapper').getBranches( res );

	} else {
		console.log('snap je actie niet, JONGUH!');
	}



}

/*
 * Haal de url parameters op uit de gegeven url.
 */
function getParameters( parsedUrl ) {
	var keyValueParams = [];
	var query = parsedUrl.query;

	if ( query == undefined ) {
		return null;
	}

	// Split de query in aparte key=value waardes.
	query = query.split('&');

	for ( var queryKey in query ) {
		// Split de keyValue paren in key en value.
		var splittedKeyValue = query[queryKey].split('=');
		keyValueParams[splittedKeyValue[0]] = splittedKeyValue[1];

	}
	return keyValueParams;
}

