<?php
/**
 * The template for displaying the footer.
 *
 * @package template
 */
?>

<footer>
	<nav>
		<?php wp_nav_menu(array("theme_location" => "footer")); ?>
	</nav>

	<div class="colophon">
		&copy; <?php echo date("Y") ?> <?php echo get_bloginfo("site_title") . " - " . get_bloginfo("description"); ?>
		Website design & development by <a href="https://www.geckodesigns.com" target="_blank" title="WordPress website design and development by Gecko Designs">Gecko Designs</a>
	</div>
</footer>

<?php wp_footer(); ?>

</body>
</html>