/*
 * Voer een dryrun van het deployen van de gegeven svnDir naar de gegeven serverUrl uit.
 */
exports.execute = function ( svnDir, serverUrl, callback ) {
	var srcDir = '/tmp/static-trunk',
		targetDir = '/tmp/static-trunk-compiled';

	require('../functions/checkout.js').execute(svnDir, srcDir, function() {
		console.log('Klaar met uitchecken, ga nu jscsscompile doen');
		require('../functions/jscssCompile.js').execute(srcDir, targetDir, function(){
				require('../functions/rsync.js').execute(srcDir, targetDir, true, function(str){
				console.log(str);
			});
		});
	});

	

}
