var exec = require('child_process').exec,
	settings = require('../settings.js').getSettings();

/*
 * Voer een svn up uit op de opgegeven targetDir
 */
exports.execute = function( targetDir ) {
	exec('svn up ' + targetDir + ' --username ' +settings.svnUser + ' --password ' + settings.svnPasswd);
}