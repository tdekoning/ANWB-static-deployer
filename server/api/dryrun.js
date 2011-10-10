/*
 * Voer een dryrun van het deployen van de gegeven svnDir naar de gegeven serverUrl uit.
 */
exports.execute = function ( callback, svnDir, serverUrl ) {
	
	// TODO: Check code uit (in tmp dir)
	// TODO: Maak dynamisch
	var srcDir = '/tmp/static-trunk';
	var targetDir = '/tmp/static-trunk-compiled';
	require('../functions/jscssCompile.js').execute(srcDir, targetDir);
	// TODO: Check de verschillen met de gegeven server.

}
