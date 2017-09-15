import "core-js";
import "whatwg-fetch";

import ready from "./core/ready";

import FixedHeader from "./components/fixed-header";
import TouchMenu from "./components/touch-menu";
import GeckoSlideshow from "./components/gecko-slideshow";

import Konami from "./core/konami";

import "./weak";

ready(() => {
	console.log("Ready!");

	const menu = TouchMenu.searchAndLoadOne();

	FixedHeader.searchAndLoad()
		.forEach(header => {
			header.watch();

			const toggleEl = header.element.querySelector(`[data-action="toggle-touch-menu"]`);

			if (toggleEl) {
				toggleEl.addEventListener("click", () => {
					menu.toggle();
				});
			}
		});

	GeckoSlideshow.searchAndLoad()
		.forEach(slideshow => {
			slideshow.reify();
		});

	Konami.init();
	Konami.hook(() => {
		document.documentElement.classList.add("konami");
	});
});