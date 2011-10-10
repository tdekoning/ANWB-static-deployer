var exec = require('child_process').exec;

/*
 * Voert een rsync uit met de gegeven parameters.
 */
exports.execute = function( srcDir, targetDir, dryRun, callback ) {
	exec('mkdir '+ targetDir, function() {
		var command = 'rsync -vur --exclude=*.svn';
		if ( dryRun == true ) {
			command += ' --dry-run';
		}
		command += ' ' + srcDir + ' ' + targetDir;

		console.log('execute rsync');
		exec(command, function( error, stdout, stderr ) {
			callback( stdout );
		});
	});
}