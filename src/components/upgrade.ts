import GameComponent from '../types/GameComponent';
import { UpgradeConfig } from '../types/upgrade';

export default class Upgrade implements GameComponent {
	private _qtt: number = 0;
	private _price!: number;
	private _nps!: number;

	public readonly name!: string;
	public readonly description!: string;

	public get quantity() {
		return this._qtt;
	}

	public get price() {
		return this._price;
	}

	public get nps() {
		return this._nps;
	}

	constructor(config: UpgradeConfig) {
		this.name = config.name;
		this.description = config.description;
		this._price = config.price;
		this._nps = config.nps;
	}

	start(): void {
		throw new Error('Method not implemented.');
	}
	update(delta?: number | undefined): void {
		throw new Error('Method not implemented.');
	}
	render(): void {
		throw new Error('Method not implemented.');
	}
}
