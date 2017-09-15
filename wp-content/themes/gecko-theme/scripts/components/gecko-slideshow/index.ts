import { Component, Attributes } from "armature";
import { $each, $if } from "ekma";
import Timing from "../../core/timing";
import AspectRatio from "../../core/aspect-ratio";

import Slide, { SlideState } from "./slide";
import Controls, { ControlsState } from "./controls";

type seconds = number;
type milliseconds = number;

interface SlideshowData {
	slides: SlideState[];
	controls?: ControlsState|boolean;
	speed?: seconds;
	autoPlay?: boolean;
	aspectRatio?: string;
	maxHeight?: string;
	minHeight?: string;
}

export {SlideshowData};

const slideshowSchema = {
	slides: "object"
};

const view = (slideshow: GeckoSlideshow) => `
	<div class="viewport">
		<div class="slides">
			${ $each(slideshow.state.slides, (data, i) => slideshow.getChild(Slide, i.toString())) }
		</div>

		${ slideshow.getChild(Controls, "$") }
	</div>
`;

@Attributes({
	tag: "gecko-slideshow",
	template: view
})
export default class GeckoSlideshow extends Component<SlideshowData> {
	slides: Slide[] = [];
	currentSlide: number = 0;

	controlsData: ControlsState;

	protected transitionSpeed: seconds;
	protected interval: any;

	/**
	 * Creates a new slideshow with the given parameters
	 */
	constructor(params: SlideshowData) {
		super(params);

		let missing = [];
		for (let key in slideshowSchema) {
			if (!slideshowSchema.hasOwnProperty(key)) {
				continue;
			}

			if (typeof params[key] !== slideshowSchema[key]) {
				missing.push(key);
			}
		}

		if (missing.length > 0) {
			console.error(`Slideshow data is missing parameters: ${ missing.join(",") }`);
			this.template = () => "broken, see console";
		}

		this.transitionSpeed = this.state.speed || 3;

		if (this.state.controls === true || this.state.controls == null) {
			this.controlsData = {
				arrows: true,
				dots: true
			};
		} else if (this.state.controls === false) {
			this.controlsData = {
				arrows: false,
				dots: false
			};
		} else {
			this.controlsData = this.state.controls;
		}

		this.state.slides.forEach((state, i) => {
			const slide = new Slide(state);
			slide.setLabel(i.toString());
			slide.setParent(this);

			this.slides.push(slide);
		});

		const controls = new Controls(this.controlsData)
			.setLabel("$")
			.setParent(this);

		this.$onSwitchSlides.push(index => controls.switchSlides(index));

		if (this.state.autoPlay) {
			this.start();
		}
	}

	/**
	 * Searches the page and loads any gecko-slideshow elements that are found
	 */
	static searchAndLoad() {
		const slideshows: GeckoSlideshow[] = [];

		const allSlideshows = Array.from(document.querySelectorAll(`${ this.htmlTagName }:not([data-bound])`)) as HTMLElement[];
		allSlideshows.forEach(el => {
			let data: any;

			try {
				data = JSON.parse(el.innerHTML);
			} catch(e) {
				console.error("Error loading slideshow: " + e.stack);
			}

			if (!data) {
				return;
			}

			const slideshow = new this(data);
			slideshow.attachTo(el);
			slideshows.push(slideshow);
		});

		return slideshows;
	}

	/**
	 * Armature: called when we should attach JS hooks to the DOM
	 */
	installed() {
		super.installed();

		this.slides[this.currentSlide].goIn();

		this.$onSwitchSlides.forEach(f => f(this.currentSlide));

		const viewport = this.element.querySelector(".viewport") as HTMLElement;

		if (this.state.aspectRatio) {
			const ratio = new AspectRatio(viewport, this.state.aspectRatio);
		}

		if (this.state.maxHeight) {
			viewport.style.maxHeight = this.state.maxHeight;
		}

		if (this.state.minHeight) {
			viewport.style.minHeight = this.state.minHeight;
		}
	}

	/**
	 * Is the slideshow currently autoplaying?
	 */
	isPlaying() {
		return (this.interval != null);
	}

	/**
	 * Stops the slideshow from autoplaying.
	 */
	stop() {
		if (this.interval != null) {
			clearInterval(this.interval);
			this.interval = null;
		}
	}

	/**
	 * Starts the slideshow.
	 */
	start() {
		this.stop();

		this.interval = setInterval(() => this.right(), this.transitionSpeed * 1000);
	}

	/**
	 * Switches to the slide with the given index.
	 */
	goTo(index: number) {
		const current = this.slides[this.currentSlide];
		const next = this.slides[index];

		this.$onSwitchSlides.forEach(f => f(index));

		this.currentSlide = index;

		next.prepToGoIn()
			.then(() => {
				current.goOut();
				next.goIn();
			});
	}

	protected $onSwitchSlides: Function[] = [];
	onSwitchSlides(callback: Function) {
		this.$onSwitchSlides.push(callback);
	}

	/**
	 * Cycles to the slide immediately to the right.
	 */
	right() {
		let next = this.currentSlide + 1;

		if (next >= this.slides.length) {
			next = 0;
		}

		this.goTo(next);
	}

	/**
	 * Cycles to the slide immediately to the left.
	 */
	left() {
		let next = this.currentSlide - 1;

		if (next < 0) {
			next = this.slides.length - 1;
		}

		this.goTo(next);
	}
}