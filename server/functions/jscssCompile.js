var exec = require('child_process').exec,
	settings = require('../settings.js').getSettings();
/*
 * Compileer de js en css files
 */
exports.execute = function( srcDir, targetDir, callback ) {
	// Haal oude targetDir weg.
	exec('rm -rf ' + targetDir, function(){
		// Maak een nieuwe targetDir (zorg ervoor dat geen oude versiies aanwezig zijn)
		exec('mkdir ' + targetDir, function(){
			compile(srcDir, targetDir, callback);
		});

	});
}

/*
 * Compileert de gegeven srcDir dmv de staticjscsscompiler (jar) naar de gegeven targetDir.
 */
function compile( srcDir, targetDir, callback ) {
	console.log('Compileer javascript+css in dir: '+srcDir+' naar:'+targetDir);
	// Voer touch uit op het skip_deploy.txt bestand, zodat de staticjscsscompiler niet crashed.
	exec('touch '+ srcDir +'/skip_deploy.txt');

	exec('java -jar lib/staticjscsscompiler.jar -s '+ srcDir +'/skip_deploy.txt -x '+ srcDir +'/skip_compression.txt '+ srcDir +' ' + targetDir);
	callback();
}