<?php
/**
 * Template: 404.php
 *
 * @package Gecko Designs
 * @subpackage Template
 */

http_response_code(404);
get_header();

?>

<main role="main" class="page error-404">
	<div class="wysiwyg row">
		<h1>Not Found</h1>
		<div class="content">
			<p>Sorry, but you are looking for something that isn't here.</p>
			<?php get_search_form(); ?>
		</div>
	</div>
</main>

<?php get_footer(); ?>