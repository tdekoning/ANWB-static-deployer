/*
 * Haalt branches op.
 */
exports.getBranches = function( res ) {
	var exec = require('child_process').exec;

	exec('svn ls http://v8.googlecode.com/svn/branches/', function (error, stdout, stderr) {
		if (error !== null) {
			console.log('exec error: ' + error);
		}
		res.end(stdout, 'utf-8');
	});

}