<?php
/**
 * Slideshow
 * Loads slideshows from the Slideshow CPT automatically
 */

namespace gecko;

add_action("init", function() {
	$labels = [
		"name" => "Slideshows",
		"singular_name" => "Slideshow",
	];

	$args = [
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"show_ui" => true,
		"show_in_rest" => false,
		"has_archive" => false,
		"show_in_menu" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => ["slug" => "slideshow", "with_front" => true],
		"query_var" => true,

		"supports" => ["title"],
	];

	register_post_type("slideshow", $args);
});

/**
 * Outputs a slideshow given a slideshow object
 */
function outputSlideshow($slideshow) {
	?>
		<gecko-slideshow>
			<?= json_encode($slideshow) ?>
		</gecko-slideshow>
	<?php
}

/**
 * Loads a slideshow by WordPress post ID
 */
function loadSlideshow($id) {
	$slideshow = [];

	$slideshow["autoPlay"] = get_field("auto_play", $id);
	$slideshow["speed"] = floatval(get_field("speed", $id));
	$slideshow["aspectRatio"] = get_field("aspect_ratio", $id);
	$slideshow["maxHeight"] = get_field("max_height", $id);
	$slideshow["minHeight"] = get_field("min_height", $id);

	$controls = [
		"arrows" => false,
		"dots" => false
	];
	$controlField = get_field("controls", $id);

	if ($controlField) {
		foreach ($controlField as $field) {
			$controls[$field] = true;
		}
	}

	$slideshow["controls"] = $controls;

	$slides = [];
	$slideSource = get_field("slides", $id);

	if ($slideSource) {
		foreach ($slideSource as $data) {
			$slide = [
				"image" => $data["image"]
				// Add extra fields to the slide here!
			];

			$slides[] = $slide;
		}
	}

	$slideshow["slides"] = $slides;

	return $slideshow;
}