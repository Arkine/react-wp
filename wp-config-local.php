<?php
/**
 * This is the local development configuration.
 * Copy it to wp-config.php when working locally, but don't modify the original.
 */

define("GECKO_DEV", true);

/** The name of the database for WordPress */
define('DB_NAME', 'react-wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'asdfasdf');

/** MySQL hostname */
define('DB_HOST', '192.168.1.251');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

//
define('AUTH_KEY',         'RQ1QHleXpW![u?_zjxzeC9N}_eZ|;AQEKz=5[xc)wJWBB~|:[#k?Bez{<l^V=L+g');
define('SECURE_AUTH_KEY',  '4!o]##f*J2c@?TI01*o2V}0p-(YB~uCDo*eRC14)*$+R+<gd/0v4M|-:)[Q,rY? ');
define('LOGGED_IN_KEY',    'WM&G`wVa~XH5o~lRO}ET7w?Wz&{[dp4R4@af]^/te&!jsofLjnhn)ZH(R[k9C[kh');
define('NONCE_KEY',        'CuK94E+:C_CIT]%okk3gllH;Y{W=O{Mv3i+B^m|SWxm!Ta2Rp[g+_vUo.BREx(P(');
define('AUTH_SALT',        'Wy$1omN>hq)+J&Ax1Ix`>y%{(aJ*n /mI<ik@nMkKkRy(%Mu:tGm,jRw90:xCOO|');
define('SECURE_AUTH_SALT', 'G,*<|Rcwvb;#G,|@#E6GbD*W#0FJ$Z1<y$jvw>y>c|}3#MU,_|^l43<+1CCFnu/1');
define('LOGGED_IN_SALT',   ',0#)-;]7?UNidZ?T@Buje5ZyS}cg,:3!GJw?n ~(:wg8SBa|$ v*o?*s7Ug+%>=R');
define('NONCE_SALT',       '_{@@YkdLR8+}/}(D-$ ;qBxe22v;hI<3v-AfZs779[aa$D1.[AN+vG[Jeee5_v8I');



/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);

// Disable display of errors and warnings
// define('WP_DEBUG_DISPLAY', false);
// @ini_set('display_errors',0);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
