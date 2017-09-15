import { Component, Attributes } from "armature";
import Timing from "../../core/timing";

import template from "./slide.template";

import GeckoSlideshow from "./";

interface SlideState {
	image: string;

	// Add custom data fields to slides here!
}

export {SlideState};

@Attributes({
	tag: "gecko-slide",
	template
})
export default class GeckoSlide extends Component<SlideState> {
	$parent: GeckoSlideshow;

	installed() {
		super.installed();

		this.element.style.backgroundImage = `url(${ this.state.image })`;
	}

	goOut() {
		this.element.setAttribute("data-state", "out");
		this.element.setAttribute("aria-hidden", "true");
	}

	goIn() {
		this.element.setAttribute("data-state", "in");
		this.element.removeAttribute("aria-hidden");
	}

	prepToGoIn() {
		return Timing.frame()
			.then(() => {
				this.element.style.transitionDuration = "0s";
				this.element.style.transitionDelay = "0s";

				return Timing.frame();
			})
			.then(() => {
				this.goOut();

				return Timing.frame();
			})
			.then(() => {
				this.element.style.transitionDuration = "";
				this.element.style.transitionDelay = "";
			});
	}
}