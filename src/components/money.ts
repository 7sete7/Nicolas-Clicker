import GameComponent from '../types/GameComponent';

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

	update(delta: number) {
		if (this.nps > 0) {
			this.incrementNics(this.nps * delta);
		}
	}

	render() {
		this.nicsElement.innerText = this.nics.toFixed(1);
		this.npsElement.innerText = String(this.nps);
	}
}
