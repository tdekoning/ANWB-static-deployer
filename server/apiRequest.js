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
		getSvnDirs.execute( callback, settings.svnBranches);

	} else if ( params.action === 'getTags' ) {

		var getSvnDirs = require('./api/getSvnDirectories');
		getSvnDirs.execute( callback, settings.svnTags  );

	} else if ( params.action === 'getServerVersie' ) {

		var getServerVersie = require('./api/getServerVersie');
		getServerVersie.execute( callback );

	} else if ( params.action === 'dryrun' ) {

		require('./api/dryrun').execute(callback, 'https://subversion.anwb.loc/svn/front-end/static/trunk', '');

	} else if ( params.action === 'deploy' ) {

		require('./api/deploy').execute(callback, 'https://subversion.anwb.loc/svn/front-end/static/trunk', '');

	} else {
		console.log('snap je actie niet, JONGUH!');
		response.end('not implemented');
	}

	/*
	 * Callback functie, schrijft data naar de browser.
	 */
	function callback( str ) {
		response.end(str);
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