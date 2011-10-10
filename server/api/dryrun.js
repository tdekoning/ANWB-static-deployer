var jscompile = require('../functions/jscssCompile.js'),
	checkout = require('../functions/checkout.js'),
	rsync = require('../functions/rsync.js'),
	diff = require('../functions/diff.js');


/*
 * Voer een dryrun van het deployen van de gegeven svnDir naar de gegeven serverUrl uit.
 */
exports.execute = function ( svnDir, serverUrl, callback ) {
	// TODO: Haal directories uit config file.
	var srcDir = '/tmp/static-trunk/',
		tmpForDiff = '/tmp/tmpForDiff/',
		targetDir = '/tmp/static-trunk-compiled/',
		remoteServerDir = targetDir;

	checkout.execute(svnDir, srcDir, function() {
		console.log('Klaar met uitchecken, ga nu jscsscompile doen');

		jscompile.execute( srcDir, targetDir, function() {
			rsync.execute( remoteServerDir, tmpForDiff, true, function() {
				diff.execute( srcDir, tmpForDiff, callback );
			});
		});
	});

	

}
