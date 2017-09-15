<?php
/**
 * Theme Core
 * Sets up the core of theme: supports and assets
 */

add_action("after_setup_theme",
	function() {
		add_theme_support("post-thumbnails");
		add_theme_support("woocommerce");

		add_theme_support("html5", [
			"search-form", "comment-form", "comment-list", "gallery", "caption",
		]);

		register_nav_menus([
			"primary" => "Primary Menu",
			"footer" => "Footer Menu",
		]);
	}
);

add_action("wp_enqueue_scripts",
	function() {
		$assetVersion = strval(GECKO_ASSET_VERSION);

		wp_enqueue_style("theme-styles", get_template_directory_uri() . "/dist/bundle.css", [], $assetVersion);

		wp_enqueue_script("jquery");
		wp_enqueue_script("theme-scripts", get_template_directory_uri() . "/dist/bundle.js", ["jquery"], $assetVersion, true);
	}
);