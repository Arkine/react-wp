export default class Blackout {
	element: HTMLElement;

	constructor() {
		this.element = document.createElement("gecko-blackout");
		this.element.setAttribute("role", "presentation");

		this.hide();

		this.element.addEventListener("click", () => {
			this.$onClick.forEach(f => f());
		})
	}

	attachTo(target: Element) {
		this.element.style.zIndex = getComputedStyle(target).zIndex;
		target.parentElement.insertBefore(this.element, target);
	}

	protected $onClick: Function[] = [];
	onClick(callback: Function) {
		this.$onClick.push(callback);
	}

	show() {
		this.element.removeAttribute("hidden");
	}

	hide() {
		this.element.setAttribute("hidden", "hidden");
	}
}