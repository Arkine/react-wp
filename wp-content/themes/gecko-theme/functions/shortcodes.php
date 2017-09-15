<?php
//   [button href="http://www.geckodesigns.com"]GeckoDesigns.com[/button]
add_shortcode('button', function($atts, $content = null) {
	$a = shortcode_atts([
		'href' => '#',
	], $atts);

	return '<a href="'.esc_attr($a['href']).'" class="button">'.$content.'</a>';
});



//   [email address="email@address.com"]
add_shortcode('email', function( $atts, $content = null ) {
	$a = shortcode_atts([
		'address' => '',
	], $atts);

	if ( ! is_email( $a["address"] ) ) {
		return;
	}

	return '<a href="mailto:'.antispambot( $a["address"] ).'">'.antispambot($a["address"]).'</a>';
});



// Content Editor shortcode buttons for easy shortcode access.
add_action( 'admin_enqueue_scripts', function($hook_suffix){
	if( in_array($hook_suffix, array('post.php', 'post-new.php') ) ){
		$screen = get_current_screen();
		if( is_object( $screen )){
			wp_enqueue_script('media_button', get_template_directory_uri().'/admin/gecko-shortcodes.js', ['jquery'], 2, true);
			wp_enqueue_style('gecko-shortcodes', get_template_directory_uri().'/admin/gecko-shortcodes.css', [], 2);
		}
	}
});

add_action('media_buttons', function() {
	echo '<span id="gecko-shortcodes-wrapper">';
	echo 	'<button id="gecko-shortcodes" class="button">Gecko Shortcodes</button>';
	echo 	'<ul id="gecko-shortcodes-list">';
	echo 		'<li data-gecko-shortcode="[button href=&quot;/contact&quot;]Contact Us[/button]">Button</li>';
	echo 		'<li data-gecko-shortcode="[email address=&quot;email@address.com&quot;]">Email</li>';
	echo 	'</ul>';
	echo '</span>';
});