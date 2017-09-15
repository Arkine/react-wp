const Timing = {
	/**
	 * A Promise wrapper for requestAnimationFrame
	 */
	frame() {
		return new Promise(resolve => {
			requestAnimationFrame(() => resolve());
		});
	},

	/**
	 * A Promise wrapper for setTimeout
	 */
	delay(amount: number) {
		return new Promise(resolve => {
			setTimeout(() => resolve(), amount);
		});
	}
};

export default Timing;