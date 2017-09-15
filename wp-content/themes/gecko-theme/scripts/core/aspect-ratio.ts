import Timing from "./timing";

/**
 * Automatically manages the aspect ratio of an HTML element.
 * Hooks into window resize events to try to keep the element at the given aspect ratio.
 */
export default class AspectRatio {
	/**
	 * The numerator of the aspect ratio.
	 */
	high: number = 1;

	/**
	 * The denominator of the aspect ratio.
	 */
	low: number = 1;

	/**
	 * The dimension to use as a reference for the aspect ratio.
	 * The ratio is always width/height.
	 */
	base: string = "width";

	/**
	 * The HTML element this object is managing.
	 */
	element: HTMLElement;

	/**
	 * Create a new object to manage the given element's resizing.
	 * Resizing happens automatically on window resize.
	 *
	 * @param target The element to manage
	 * @param ratio The aspect ratio to keep the element at
	 */
	constructor(target: HTMLElement, ratio: string) {
		this.element = target;

		let matches = ratio.match(/(\d+):(\d+)/);

		if (!matches) {
			return;
		}

		let [, high, low] = matches;

		this.high = parseInt(high);
		this.low = parseInt(low);

		window.addEventListener("resize", () => {
			this.resize();
		});

		Timing.frame()
			.then(() => Timing.frame())
			.then(() => {
				this.resize();
			});
	}

	/**
	 * Resize this object's managed element to match what it should be now
	 */
	resize() {
		if (!this.high || !this.low) {
			return;
		}

		let ratio = this.high / this.low;

		if (this.base === "width") {
			let height = this.element.offsetWidth / ratio;

			this.element.style.height = `${ height }px`;
		} else if (this.base === "height") {
			let width = this.element.offsetHeight * ratio;

			this.element.style.width = `${ width }px`;
		}
	}
}