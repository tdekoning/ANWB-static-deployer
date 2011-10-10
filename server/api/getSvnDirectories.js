var exec = require('child_process').exec;

/*
 * Haalt de subdirectories op van de opgegeven svnRepo directory.
 */
exports.execute = function( callback, svnRepo ) {

	console.log('getting svn directories...');

	exec('svn ls '+ svnRepo, function ( error, stdout, stderr ) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if ( error !== null ) {
			console.log('exec error: ' + error);
		}
		myArray = stdout.split('\n');

		callback( JSON.stringify(myArray) );
	});
}