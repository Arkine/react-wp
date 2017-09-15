<?php
/**
 * Adds sidebar areas to the theme
 */

add_action("widgets_init",
	function() {
		register_sidebar([
			"name" => "Sidebar",
			"id" => "sidebar-1",
			"description" => "",
			"before_widget" => '<div id="%1$s" class="widget %2$s">',
			"after_widget" => '</div>',
			"before_title" => '<h2 class="widget-title">',
			"after_title" => '</h2>'
		]);
	}
);