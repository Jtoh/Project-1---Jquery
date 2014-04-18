$(document).ready(function() {
$('.nav-item').on('click', function() {
	var message = $('<span>Hello</span>');
	$(this).append(message);
	// $(this).remove();
});
});