var exec = require('child_process').exec,
	child;

/*
 * Haalt de subdirectories op van de opgegeven svnRepo directory.
 */
exports.execute = function( request, response, svnRepo ) {

	console.log('getting svn directories...');

	child = exec('svn ls '+ svnRepo, function ( error, stdout, stderr ) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if ( error !== null ) {
			console.log('exec error: ' + error);
		}
		myArray = stdout.split('\r\n');
		response.end( JSON.stringify(myArray) ); // eindigen van de response zou niet de verantwoordelijkheid van deze functie moeten zijn
	});
}