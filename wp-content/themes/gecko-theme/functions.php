<?php
/**
 * Functions
 * Loads all of the utilities in our theme
 */

define("GECKO_ASSET_VERSION", 1);

define("GECKO_SLIDESHOW_ENABLED", true);

// Load all files from functions folder
foreach (glob(__DIR__ . "/functions/*.php") as $filename) {
	require_once($filename);
}