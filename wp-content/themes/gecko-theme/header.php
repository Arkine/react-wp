<?php
/**
 * The header for our theme.
 *
 * @package template
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo("charset"); ?>">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php wp_title("|", true, "right"); bloginfo("name"); ?></title>
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?= get_template_part("parts/touch", "menu"); ?>

<header class="desktop" data-fixed-header="filler">
	<div class="site-branding">
		<h1><a href="<?= home_url("/"); ?>"><?php bloginfo("name"); ?></a></h1>
		<h2><?php bloginfo("description"); ?></h2>
	</div>
	<nav>
		<?php wp_nav_menu(["theme_location" => "primary"]); ?>
	</nav>
</header>

<header class="touch" aria-hidden="true" data-fixed-header>
	<a class="toggle-touch-menu" data-action="toggle-touch-menu" aria-label="Open mobile menu"></a>
	<div class="logo">
		<a href="/"><?php bloginfo("name"); ?></a>
	</div>
</header>