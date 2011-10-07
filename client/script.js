(function( $ ) {

	var config = {
		apiUrl : 'api/'
	}

	/*
	$.getJSON( config.apiUrl + '?action=getBranches', function( data ) {
		var branches = [];

		$.each( data, function( key, val ) {
			branches.push('<li id="' + key + '">' + val + '</li>');
		});

		$('#branchesTest').append('<ul>' + branches.join('') + '</ul>');
	});
	*/
	$('#branchesTest').append('<pre>');
	$('#branchesTest pre').load( config.apiUrl + '?action=getBranches' );

})( jQuery );