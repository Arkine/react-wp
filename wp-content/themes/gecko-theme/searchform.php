<?php
/**
 * Template: searchform.php
 *
 * TODO - Make widget of style 'template-searchform'
 *
 * @package Gecko Designs
 * @subpackage Template
 */
?>

<form class="searchform" method="get" action="<?php bloginfo("url"); ?>">
	<input class="search" name="s" type="text" placeholder="Search..." tabindex="1" />
    <button class="search-btn" type="submit" tabindex="2">Search</button>
</form>