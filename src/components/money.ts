import GameComponent from '../types/gameComponent';

export default class Money implements GameComponent {
	private _nps = 0;
	private _nics = 0;

	private nicsElement!: HTMLElement;
	private npsElement!: HTMLElement;

	public get nics() {
		return this._nics;
	}

	public get nps() {
		return this._nps;
	}

	public incrementNics(amount: number) {
		this._nics += amount;
	}

	public incrementNps(amount: number) {
		this._nps += amount;
	}

	start(): void {
		this.nicsElement = document.getElementById('nics') as HTMLDivElement;
		this.npsElement = document.getElementById('nps') as HTMLDivElement;
	}

	update() {}

	render() {
		this.nicsElement.innerText = String(this.nics);
		this.npsElement.innerText = String(this.nps);
	}
}
