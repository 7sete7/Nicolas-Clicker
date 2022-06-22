class EventManager {
	private store: { [key: string]: Function[] } = {};

	public observe(name: string, fn: Function) {
		this.store[name] = (this.store[name] || []).concat(fn);
	}

	public dispatch(name: string) {
		if (this.store[name]) {
			this.store[name].forEach(fn => fn());
		}
	}
}

export default EventManager;
