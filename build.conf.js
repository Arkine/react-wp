"use strict";

// Load TypeScript from our dependencies
try {
	var typescript = require("typescript");
} catch(e) {
	console.error("Couldn't load some dependencies; try running 'npm install'");
	process.exit(1);
}

// TypeScript compiler options on the client
const browser = {
	typescript: {
		module: "commonjs",
		target: "ES5",
		moduleResolution: "node",
		sortOutput: true,
		typescript: typescript,
		noEmitOnError: true,
		experimentalDecorators: true,
		allowJs: true
	}
};

// Style options
// sass is passed straight to node-sass
const styles = {
	sass: {
	},
	// Latest two versions of evergreen browsers and IE 10
	// Also, include Firefox Extend Support to make sure we don't leave out enterprise for no reason
	autoprefixer: ["last 2 versions", "Firefox ESR"],
	stylelint: {
		rules: {
			// Important overrides rules and bypasses the *cascading* part of Cascading Style Sheets
			// We don't want that.
			"declaration-no-important": true,

			// Duplicate properties are almost always a mistake and can create issues trying to understand code.
			"declaration-block-no-duplicate-properties": true,

			// Operators need to be spaced out.
			// We have it disabled because of some issues in stylelint, the linter we use.
			// "function-calc-no-unspaced-operator": true,

			// Autoprefixer handles vendor prefixes for you.
			// If you're writing vendor prefixes, something is wrong.
			"property-no-vendor-prefix": true,

			// Numbers should always have leading zeroes for clarity.
			"number-leading-zero": "always"
		}
	}
};

const config = {
	browsersync: {
		proxy: {
			target: "react-wordpress.dev",
			ws: true
		},
		ghostMode: false
	},

	preset: "debug",
	presets: {
		debug: {
			watch: true,
			sourcemaps: true,
			minify: false,
			out: ""
		},
		production: {
			watch: false,
			sourcemaps: false,
			minify: true,
			out: ""
		}
	},

	pipelines: [
		{
			id: "browser",
			config: browser,
			type: "browser",
			extraEntries: ["typings/browser.d.ts"],

			input: "wp-content/themes/gecko-theme/scripts/main.ts",
			output: "wp-content/themes/gecko-theme/dist/bundle.js"
		},
		{
			id: "styles",
			config: styles,
			type: "styles",

			input: "wp-content/themes/gecko-theme/styles/theme.scss",
			output: "wp-content/themes/gecko-theme/dist/bundle.css",
			watchPaths: ["wp-content/themes/gecko-theme/**/*.scss"]
		}
	]
};

module.exports = config;