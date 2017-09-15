jQuery(document).ready(function($){
	var shortcodeList = $('#gecko-shortcodes-list');

	$('#gecko-shortcodes').on('click', function(e){
		e.preventDefault();

		if (shortcodeList.attr('data-status') === 'active') {
			shortcodeList.removeAttr('data-status');
		} else {
			shortcodeList.attr('data-status', 'active');
		}
	});

	shortcodeList.on('click', '[data-gecko-shortcode]', function(e){
		e.preventDefault();
		console.log("Inserting shortcode");
		var content = $(this).attr('data-gecko-shortcode');
		wp.media.editor.insert(content);
		shortcodeList.removeAttr('data-status');
	});
});