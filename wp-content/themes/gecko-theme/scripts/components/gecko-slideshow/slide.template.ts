import Slide from "./slide";
import { $html, $each, $if } from "ekma";

export default (slide: Slide) => $html`
	<div class="container">
		${ /*
			This is the place to put custom markup into slides for the slideshow
			Add data fields to SlideState in `Slide.ts`, then use them here!

			This is called an ES6 template string. They work like regular strings,
			except ${ SOMETHING } is a variable substitution, and they can be multiline!

			The '$html' at the start of the string is new to ekma 0.3.0 and Armature 1.0!
			All string subtitutions are automatically escaped to prevent XSS now,
			which means that embedded HTML needs to use the tagged template string $html` ... `
		*/ "" }
	</div>
`;