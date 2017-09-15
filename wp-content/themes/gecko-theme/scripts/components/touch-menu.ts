import Blackout from "./blackout";

export default class TouchMenu {
	element: HTMLElement;
	blackout: Blackout;

	constructor(target: Element) {
		this.element = <HTMLElement>target;

		this.blackout = new Blackout();
		this.blackout.attachTo(this.element);

		this.blackout.onClick(() => {
			this.blackout.hide();
			this.close();
		});

		this.close();

		this.onOpen(() => this.blackout.show());
		this.onClose(() => this.blackout.hide());
	}

	static searchAndLoadOne() {
		const el = document.querySelector("body > aside.touch-menu");

		if (!el) {
			console.error(`Couldn't find touch menu element ("body > aside.touch-menu")`);
			return null;
		}

		const menu = new this(el);

		return menu;
	}

	protected $onOpen: Function[] = [];
	onOpen(callback: Function) {
		this.$onOpen.push(callback);
	}

	protected $onClose: Function[] = [];
	onClose(callback: Function) {
		this.$onClose.push(callback);
	}

	isOpen() {
		return this.element.getAttribute("hidden") == null;
	}

	toggle() {
		if (this.isOpen()) {
			this.close();
		} else {
			this.open();
		}
	}

	open() {
		this.element.removeAttribute("hidden");
		this.$onOpen.forEach(f => f());
	}

	close() {
		this.element.setAttribute("hidden", "hidden");
		this.$onClose.forEach(f => f());
	}
}