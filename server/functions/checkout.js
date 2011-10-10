var exec = require('child_process').exec,
	settings = require('../settings.js').getSettings();
/*
 * Voer een checkout uit van een svn directory in de gegeven targetDir.
 */
exports.execute = function( svnDir, targetDir ) {
	exec('svn co ' + svnDir + ' ' + targetDir + ' --username ' +settings.svnUser + ' --password ' + settings.svnPasswd);
}