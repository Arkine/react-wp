<?php
/**
 * Template: index.php
 *
 * @package Gecko Designs
 * @subpackage Template
 */

get_header(); ?>

<main role="main" class="page index">
	<div class="wysiwyg row">
	<?php if (have_posts()): ?>
		<h1>Index</h1>

		<div class="posts">
			<?php while (have_posts()): the_post(); ?>
				<article>
					<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
					<div class="excerpt">
						<?php the_excerpt(); ?>
					</div>
				</article>
			<?php endwhile; ?>
		</div>

		<?= paginate_links(); ?>
	<?php else: ?>
		<h1>Index Empty!</h1>

		<div class="content wysiwyg">
			<p>Sorry, but you are looking for something that isn't here.</p>
			<?php get_search_form(); ?>
		</div>
	<?php endif; ?>
	</div>
</main>

<?php get_footer(); ?>