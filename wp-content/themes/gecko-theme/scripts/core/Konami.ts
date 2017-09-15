export default class Konami {
	static input = "";
	static pattern = "38384040373937396665";
	static callbacks: Function[] = [];

	static init() {
		document.addEventListener("keydown", e => {
			this.input += e.keyCode;

			if (this.input.length > this.pattern.length)
				this.input = this.input.slice(this.input.length - this.pattern.length);
			if (this.input == this.pattern) {
				this.input = "";

				this.callbacks.forEach(f => f());
			}
		});
	}

	static hook(callback: Function) {
		this.callbacks.push(callback);
	}
}