
$('input').on('keyup', function(){
	alert($('input').val());
	$('#add').append('<div></div>').html($('input').val());
});
