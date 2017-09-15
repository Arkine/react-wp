<?php
/**
 * Template: search.php
 *
 * @package Gecko Designs
 * @subpackage Template
 */

get_header(); ?>

<main role="main" class="page search">
	<div class="wysiwyg row">
	<?php if (have_posts()): ?>
		<h1>Search Results for: <span class="search-term"><?php echo get_search_query();?></span></h1>
		<ol class="posts">
		<?php while (have_posts()): the_post(); ?>
			<li>
				<article class="wysiwyg">
					<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
					<section class="excerpt">
						<?php the_excerpt(); ?>
					</section>
				</article>
			</li>
		<?php endwhile; ?>
		</ol>
		<?php
		the_posts_pagination(array(
			"prev_text" => "Previous page",
			"next_text" => "Next page"
		));
		?>
	<?php else: ?>
		<h1>Your search for <span class="search-term"><?php echo get_search_query(); ?></span> did not match any entries</h1>

		<div class="content">
			<?php get_search_form(); ?>

			<p>Suggestions:</p>
			<ul>
				<li>Make sure all words are spelled correctly.</li>
				<li>Try different keywords.</li>
				<li>Try more general keywords.</li>
			</ul>
		</div>
	<?php endif; ?>
	</div>
</main>

<?php get_footer(); ?>