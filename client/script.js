(function( $ ) {

	var config = {
		apiUrl : 'api/'
	}

	
	$.getJSON( config.apiUrl + '?action=getBranches', function( data ) {
		var branches = [];

		$.each( data, function( key, value ) {
			branches.push('<li>' + value + '</li>');
		});

		$('#branchesTest').append('<ul>' + branches.join('') + '</ul>');
	});

})( jQuery );