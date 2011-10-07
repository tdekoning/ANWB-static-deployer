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

	$.getJSON( config.apiUrl + '?action=getTags', function( data ) {
		var tags = [];

		$.each( data, function( key, value ) {
			tags.push('<li>' + value + '</li>');
		});

		$('#tagsTest').append('<ul>' + tags.join('') + '</ul>');
	});

})( jQuery );