(function( $ ) {

	var config = {
		apiUrl : 'api/'
	}

	
	$.getJSON( config.apiUrl + '?action=getBranches', function( data ) {
		var branches = [];

		$.each( data, function( key, value ) {
			branches.push('<option>' + value + '</option>');
		});

		$( "#branchesTest" ).append('<input id="branchesSearch"></input');
		$('#branchesSearch').autocomplete({
			source: data,
			select: function( even, ui) {
				$('#branchesSelect').val( ui.item.value );
			}
		});

		$('#branchesTest').append('<select id="branchesSelect" size="10">' + branches.join('') + '</select>');
	});

	$.getJSON( config.apiUrl + '?action=getTags', function( data ) {
		var tags = [];

		$.each( data, function( key, value ) {
			tags.push('<li>' + value + '</li>');
		});

		$('#tagsTest').append('<ul>' + tags.join('') + '</ul>');
	});

})( jQuery );