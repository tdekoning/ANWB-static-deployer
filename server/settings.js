var fs = require('fs');

/*
 * Haal settings op voor de deployer.
 */
exports.getSettings = function() {
	var fileContents = fs.readFileSync('./config.json','utf8');

	return JSON.parse(fileContents);;
}

/*
 * Sla settings op.
 * Gebruik altijd hetzelfde object die door getSettings terug wordt gegeven (met evt. andere waardes)
 */
exports.setSettings = function( settings ) {

	fs.writeFile("./config.json", JSON.stringify( settings ), function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("Settings opgeslagen");
	}
	});
}