import GameComponent from '../types/GameComponent';
import { UpgradeConfig } from '../types/upgrade';
import compileTemplateWith from '../utils/compileTemplate';

export default class Upgrade implements GameComponent {
	private _qtt: number = 0;
	private _price!: number;
	private _nps!: number;

	public readonly name!: string;
	public readonly description!: string;
	public readonly image!: string;

	private template!: string;
	private element!: HTMLDivElement;

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
		this.image = config.image;
		this._price = config.price;
		this._nps = config.nps;

		this.template = compileTemplateWith('upgrade', config);
	}

	async start(): Promise<void> {
		const upgradesParent: HTMLDivElement = document.getElementById('upgrades') as HTMLDivElement;
		this.element = document.createElement('div');
		this.element.style.display = 'contents';
		this.element.innerHTML = this.template;

		upgradesParent.appendChild(this.element);
	}
	update(delta?: number | undefined): void {}

	render(): void {}
}
