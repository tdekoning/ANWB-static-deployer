var exec = require('child_process').exec,
	child;

exports.execute = function( request, response ) {

	console.log('getting branches...');
	child = exec('svn ls http://v8.googlecode.com/svn/branches/', function ( error, stdout, stderr ) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if ( error !== null ) {
			console.log('exec error: ' + error);
		}
		myArray = stdout.split('\r\n');
		response.end( JSON.stringify(myArray) ); // eindigen van de response zou niet de verantwoordelijkheid van deze functie moeten zijn
	});
}