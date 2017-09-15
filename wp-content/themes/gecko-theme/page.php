<?php
/**
 * Template: page.php
 *
 * @package Gecko Designs
 * @subpackage Template
 */

get_header(); ?>

<?php the_post(); ?>

<main role="main" class="page">
	<div class="wysiwyg row">
		<h1><?php the_title(); ?></h1>
		<div class="content">
			<?php the_content(); ?>
		</div>
	</div>
</main>

<?php get_footer(); ?>