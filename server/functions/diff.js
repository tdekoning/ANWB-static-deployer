var exec = require('child_process').exec;

exports.execute = function( srcDir, targetDir, callback ) {

	exec('diff -qr ' + srcDir + ' ' + targetDir, function(error, stdout, stderr){

		callback( stdout );
	});
}