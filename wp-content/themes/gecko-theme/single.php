<?php
/**
 * Template: single.php
 *
 * @package Gecko Designs
 * @subpackage Template
 */

get_header();
the_post();

?>

<main role="main" class="page single">
	<article class="wysiwyg row">
		<h1><?php the_title(); ?></h1>
		<div class="meta">
			<!-- Metadata here -->
		</div>
		<div class="content">
			<?php the_content(); ?>
		</div>
	</article>
</main>

<?php get_footer(); ?>