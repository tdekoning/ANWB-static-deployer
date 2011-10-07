/*
 * Haalt branches op.
 */
exports.getBranches = function( res ) {
	var exec = require('child_process').exec,
	settingsUtil = require('./settings'),
	settings = settingsUtil.getSettings();

	console.log('getting branches...');

	settings.aantalKeerBranchesOpgehaald++;

	settingsUtil.setSettings( settings );

	exec('svn ls ' + settings.svnRepo, function (error, stdout, stderr) {
		if (error !== null) {
			console.log('exec error: ' + error);
		}
		res.end(stdout, 'utf-8');
	});

}