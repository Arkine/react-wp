export default (callback: Function) => {
	if (document.readyState == "complete" ||
		document.readyState == "loaded" ||
		document.readyState == "interactive") {

		callback();
	} else {
		document.addEventListener("DOMContentLoaded", () => {
			callback();
		});
	}
};