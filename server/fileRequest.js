var fs = require('fs');
var path = require('path');

/* 
 * Haal een bestand op aan de hand van de request.
 */
exports.performRequest = function( request, response ) {
	// req is het pad naar de file.
	// Geef de file terug met de juiste content-type.
	var filePath = '';
	if ( request.url == '/' ) {
		filePath = '../client/index.html';
	} else {
		filePath = '../client/.' + request.url;
	}


	var extname = path.extname( filePath );
	var contentType = getContentType( extname );

	path.exists(filePath, function(exists) {

		if ( exists ) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			response.writeHead(404, {'Content-Type': 'text/plain'});
			response.end('You r doing it rong!');
		}
	});
	

}

/*
 * Haal het juiste contenttype op aan de hand van de gegeven extensie
 */
function getContentType( extname ) {

	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
	}
	return contentType;
}
