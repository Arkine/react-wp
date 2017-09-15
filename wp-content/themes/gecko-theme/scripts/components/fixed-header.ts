export default class FixedHeader {
	element: HTMLElement;
	hasFiller: boolean = false;

	protected filler: HTMLElement;

	constructor(el: Element) {
		this.element = <HTMLElement>el;

		if(this.element.getAttribute("data-fixed-header") === "filler") {
			this.createFiller();
		}
	}

	createFiller() {
		this.hasFiller = true;
		this.filler = document.createElement("div");
		this.filler.setAttribute("role", "presentation");
		this.element.parentElement.insertBefore(this.filler, this.element);

		this.resize();
	}

	static searchAndLoad() {
		const els = <HTMLElement[]>Array.from(document.querySelectorAll("body > header[data-fixed-header]"));
		const headers: FixedHeader[] = [];

		els.forEach(el => {
			const header = new this(el);

			headers.push(header);
		});

		return headers;
	}

	getHeight() {
		return this.element.scrollHeight;
	}

	resize() {
		this.filler.style.height = `${ this.getHeight() }px`;
	}

	watch() {
		window.addEventListener("resize", () => {
			if(this.hasFiller) {
				this.resize();
			}
		});

		requestAnimationFrame(() => {
			if(this.hasFiller) {
				this.resize();
			}
		});
	}
}