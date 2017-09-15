/**
 * guh Entrypoint
 */

"use strict";

const major = parseInt(process.versions.node.match(/^\d+/));

if (major < 6) {
	console.error("HELLO! UPDATE TO NODE 6.0 OR HIGHER.");
	console.error(`YOU ARE ON VERSION ${ process.versions.node }, WHICH IS NO LONGER SUPPORTED.`);
	console.log("\n");

	process.exit(1);
}

const gulp = require("gulp");

const pack = require("./package.json");

let conf;
try {
	conf = require("./build.user.conf");
} catch(e) {
	conf = require("./build.conf");
}

const main = require("guh-core/main");
const core = require("guh-core/core");

core.init(pack, conf);

gulp.task("default", main);

if (!/gulp\.js$/.test(require.main.filename)) {
	main();
}