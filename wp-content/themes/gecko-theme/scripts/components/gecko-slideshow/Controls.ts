import { Component, Attributes } from "armature";
import Timing from "../../core/timing";

import template from "./controls.template";
import GeckoSlideshow from "./";

interface ControlsState {
	arrows?: boolean;
	dots?: boolean;
}

export { ControlsState };

@Attributes({
	tag: "gecko-slideshow-controls",
	template
})
export default class GeckoControls extends Component<ControlsState> {
	/**
	 * The element containing these controls
	 */
	parent: GeckoSlideshow;

	switchSlides(index: number) {
		const dots = this.getDots();
		const activeDot = this.getDot(index);

		dots.forEach(dot => {
			if (dot !== activeDot) {
				dot.removeAttribute("data-active");
			} else {
				dot.setAttribute("data-active", "true");
			}
		});
	}

	getDots() {
		return Array.from(this.element.querySelectorAll(".dots > .dot"));
	}

	getDot(index: number) {
		return this.element.querySelector(`.dots > .dot[data-slide="${ index }"]`) as HTMLElement;
	}

	installed() {
		super.installed();

		if (this.state.arrows) {
			const left = this.element.querySelector(`[data-action="left"]`) as HTMLElement;
			left.addEventListener("click", e => {
				e.preventDefault();

				const wasPlaying = this.parent.isPlaying();

				this.parent.stop();
				this.parent.left();

				if (wasPlaying) {
					this.parent.start();
				}
			});

			const right = this.element.querySelector(`[data-action="right"]`) as HTMLElement;
			right.addEventListener("click", e => {
				e.preventDefault();

				const wasPlaying = this.parent.isPlaying();

				this.parent.stop();
				this.parent.right();

				if (wasPlaying) {
					this.parent.start();
				}
			});
		}

		if (this.state.dots) {
			const dots = this.getDots();

			dots.forEach(dot => {
				dot.addEventListener("click", e => {
					const index = parseInt(dot.getAttribute("data-slide"));

					if (this.parent.currentSlide === index) {
						return;
					}

					const wasPlaying = this.parent.isPlaying();

					this.parent.stop();
					this.parent.goTo(index);

					if (wasPlaying) {
						this.parent.start();
					}
				});
			});
		}
	}
}