<?php
// ID is hardcoded here only for example purposes!
// Add an ACF field to the page that needs a slideshow and reference it with get_field
$slideshow = gecko\loadSlideshow(95);

// Testing slide, remove this when building out the site's slideshow!
for ($i = 0; $i < 3; $i++) {
	$slideshow["slides"][] = [
		"image" => "http://lorempixel.com/1600/700/cats/wow,%20such%20cat?$i"
	];
}

gecko\outputSlideshow($slideshow)

?>