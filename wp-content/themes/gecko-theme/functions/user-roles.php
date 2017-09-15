<?php
/**
 * User Roles
 * This file configures our custom user roles and hides features from clients
 */

add_action("init", function() {
	$caps = get_role("administrator");

	$caps = array_merge($caps->capabilities, [
		"gecko_develop" => true,
		"administrator" => true
	]);

	remove_role("gecko_dev");
	add_role("gecko_dev", "Gecko Developer", $caps);
});

add_action("admin_menu", function() {
	// Never useful
	remove_menu_page("edit-comments.php");

	// Development only
	if (!current_user_can("gecko_develop")) {
		remove_menu_page("edit.php?post_type=acf-field-group");

		remove_menu_page("cptui_main_menu");
	}
}, 999);