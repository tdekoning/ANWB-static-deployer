var url = require('url');

exports.performRequest = function( req, res ) {
	//req moet action als parameter hebben.
	//Action mapped op api functie.
	var parsedUrl = url.parse( req.url );
	console.log(parsedUrl);
}
	
