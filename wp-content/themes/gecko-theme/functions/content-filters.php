<?php
/**
 * Content Filters
 * Registers filters to adjust content globally
 */

add_filter("woocommerce_enqueue_styles", "__return_empty_array");

add_filter("excerpt_more",
	function($more) {
		return ' <a class="read-more" href="' . get_permalink(get_the_ID()) . '">Read More &raquo;</a>';
	}
);