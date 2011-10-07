var url = require('url'),
	settingsUtil = require('./settings'),
	settings = settingsUtil.getSettings();

exports.performRequest = function( request, response ) {
	// req moet action als parameter hebben.
	// Action mapped op api functie.
	var parsedUrl = url.parse( request.url );
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

		var getSvnDirs = require('./api/getSvnDirectories');

		settings.aantalKeerBranchesOpgehaald++;
		settingsUtil.setSettings( settings );

		getSvnDirs.execute(request, response, settings.svnBranches);

	} else if ( params.action === 'getTags' ) {

		var getSvnDirs = require('./api/getSvnDirectories');

		settings.aantalKeerTagsOpgehaald++;
		settingsUtil.setSettings( settings );

		getSvnDirs.execute(request, response, settings.svnTags);

	} else {
		console.log('snap je actie niet, JONGUH!');
		response.end('not implemented');
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