/*
 * Voer een dryrun van het deployen van de gegeven svnDir naar de gegeven serverUrl uit.
 */
exports.execute = function ( callback, svnDir, serverUrl ) {
	var srcDir = '/tmp/static-trunk',
	var targetDir = '/tmp/static-trunk-compiled';

	require('../functions/checkout.js').execute(svnDir, srcDir, function() {

		require('../functions/jscssCompile.js').execute(srcDir, targetDir);
	});

	
	// TODO: Check de verschillen met de gegeven server.

}
