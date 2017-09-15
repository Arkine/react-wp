<?php
if (function_exists('acf_get_setting')) {
	add_action('admin_enqueue_scripts', function() {
		if(mb_strlen(acf_get_setting("google_api_key")) <= 0){
			acf_update_setting("google_api_key", "AIzaSyC8zE-Oi9jXRRWUIOR9QACbjsW1AQtrjgQ");
		}
	});
}

if (function_exists('acf_add_options_page')) {
	acf_add_options_page([
		'page_title' 	=> 'Theme Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'gecko-theme-settings',
		'capability'	=> 'edit_posts',

		'position'		=> '61.4',
		'icon_url'		=> 'dashicons-admin-settings',

		'redirect'		=> false,
	]);
}